import React from 'react';
import { CircularProgress, Button, Card, FontIcon } from 'react-md';
import PostListing from '../PostListing';
import { Link } from 'react-router-dom';

export default class Tags extends React.Component {

    state = {
        postEdges: [],
        tag: this.props.location.search.split('=')[1],
        loaded: false,
        maxResults: 10
    }

    async componentWillReceiveProps(nextProps) {
        let tag = await nextProps.location.search.split('=')[1]
        this.setState({ tag })
        this.getPostList()
    }

    async getPostList() {
        this.setState({ loaded: false })
        let list = []
        let query = 'https://www.googleapis.com/books/v1/volumes?q=subject=' + this.state.tag

        console.log(query);

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
        let more = this.state.maxResults + 10
        await this.setState({ maxResults: more })
        this.getPostList()
    }

    componentDidMount() {
        this.getPostList()
    }
    redirect() {
        return
    }
    render() {
        return (
            <div className="about-container">
                <div className="about-container md-grid mobile-fix">
                    <Card className="md-grid md-cell--8">
                        <div style={{ display: 'flex' }} onClick={this.redirect.bind(this)}>
                            <Link to="/">
                                <FontIcon>navigate_before</FontIcon>
                            </Link>
                        </div>
                        <div className="md-text-center">
                            <h1>Categoria:</h1>
                            <h3>{decodeURI(this.state.tag)}</h3>
                        </div>
                    </Card>
                </div>
                <PostListing postEdges={this.state.postEdges} result={this.state.maxResults} />
                <div className="md-text-center">
                    {!this.state.loaded ? (<CircularProgress id="1" />) : ""}
                    <Button flat secondary swapTheming onClick={this.addPage.bind(this)}><FontIcon>add</FontIcon></Button>
                </div>
            </div>
        );
    }
}