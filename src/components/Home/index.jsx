import React from 'react';
import { CircularProgress, Button } from 'react-md';
import PostListing from '../PostListing';

export default class Home extends React.Component {
    constructor() {
        super()

        this.state = {
            postEdges: [],
            maxResults: 10,
            loaded: false
        }
    }

    componentDidMount() {
        this.getPostList()
    }

    async getPostList() {
        let list = []
        await fetch('https://www.googleapis.com/books/v1/volumes?q=a&orderBy=newest&maxResults=' + this.state.maxResults)
            .then((res) => {
                res.json()
                    .then((postList) => {
                        postList.items.forEach(pL => {
                            list.push({
                                path: pL.accessInfo.webReaderLink,
                                tags: pL.volumeInfo.categories,
                                cover: pL.volumeInfo.imageLinks.thumbnail,
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

    addPage() {
        let more = this.state.maxResults + 10
        this.setState({ maxResults: more, loaded: false })
        this.getPostList()
    }

    render() {

        return (
            <div className="about-container">
                <div className="md-text-center">
                    <h1>Últimos livros</h1>
                </div>

                <div className="md-grid md-grid--no-spacing">
                    <div className="about-container md-grid mobile-fix">
                        <PostListing postEdges={this.state.postEdges} result={this.state.maxResults} />
                    </div >
                </div >
                <div className="md-text-center">
                    {!this.state.loaded ? (<CircularProgress />) : ""}
                    <Button flat secondary swapTheming onClick={this.addPage.bind(this)}>Carregar mais</Button>
                </div>
            </div >
        );
    }
}