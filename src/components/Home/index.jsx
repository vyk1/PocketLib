import React from 'react';
import { CircularProgress, Button, Card, FontIcon } from 'react-md';
import PostListing from '../PostListing';

export default class Home extends React.Component {
    options = [{
        title: 'Últimos Lançamentos',
        icon: 'shuffle',
    },
    {
        title: 'Aleatório',
        icon: 'first_page',
    }]

    constructor() {
        super()

        this.state = {
            postEdges: [],
            maxResults: 10,
            loaded: false,
            op: 0
        }
    }

    componentDidMount() {
        this.getPostList()
    }

    makeid(length = 2) {
        var result = '';
        var characters = 'abcdefghijklmnopqrstuvwxyz';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    async getPostList() {
        this.setState({ loaded: false })
        let list = []
        let query = ''

        if (this.state.op === 0) {
            query = 'https://www.googleapis.com/books/v1/volumes?q=orderBy=newest'

        } else {
            let randStr = this.makeid()
            console.log('Gerando String:');
            console.log(randStr);
            query = 'https://www.googleapis.com/books/v1/volumes?q=' + randStr
        }

        await fetch(query + '&maxResults=' + this.state.maxResults)
            .then((res) => {
                res.json()
                    .then((postList) => {
                        postList.items.forEach(pL => {

                            let cover = pL.volumeInfo.imageLinks ? pL.volumeInfo.imageLinks.thumbnail : "https://via.placeholder.com/350x150"
                            list.push({
                                path: pL.volumeInfo.previewLink,
                                tags: pL.volumeInfo.categories,
                                cover: cover,
                                title: pL.volumeInfo.title,
                                date: pL.volumeInfo.publishedDate,
                                excerpt: pL.volumeInfo.description,
                                timeToRead: (pL.volumeInfo.pageCount * 3)
                            });
                        })
                        this.setState({ postEdges: list, loaded: true })
                    })
            })
    }

    async addPage() {
        if (this.state.op === 0) {
            let more = this.state.maxResults + 10
            await this.setState({ maxResults: more })
        }
        this.getPostList()
    }

    async action() {
        if (this.state.op === 0) {
            //exibe aleatorio
            await this.setState({ op: 1 })
            //exibe latest
        } else {
            await this.setState({ op: 0 })
        }
        this.setState({ postEdges: [], maxResults: 10 })
        return this.getPostList()
    }

    render() {
        return (
            <div className="about-container md-grid mobile-fix">
                <Card className="md-grid md-cell--8">
                    <h1 className="md-text-center">O quê Você Quer Ler Hoje?</h1>
                    <h3>Exibindo: {this.options[this.state.op].title}</h3>
                    <Button flat secondary swapTheming onClick={this.action.bind(this)}>
                        <FontIcon style={{ color: '#fff' }}>{this.options[this.state.op].icon}</FontIcon>
                    </Button>
                </Card>
                <div className="md-grid md-grid--no-spacing">
                    <div className="about-container md-grid mobile-fix">
                        <PostListing postEdges={this.state.postEdges} result={this.state.maxResults} />
                    </div>
                </div>
                <div className="md-text-center">
                    {!this.state.loaded ? (<CircularProgress id="1" />) : ""}
                    <Button flat secondary swapTheming onClick={this.addPage.bind(this)}><FontIcon>add</FontIcon></Button>
                </div>
            </div >
        );
    }
}