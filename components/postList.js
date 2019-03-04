import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            key: 'f3277efc6a7b458b946bc864876b0792',
            apiURL: `https://newsapi.org/v2/top-headlines`,
            // sources: `country=ro&category=business`,
            sources: `sources=techcrunch`,
        };
    }

    componentDidMount() {
        axios.get(`${this.state.apiURL}?${this.state.sources}&apiKey=${this.state.key}`).then(posts => {
            if (posts.data.articles.length > 1) {
                this.setState({
                    posts: posts.data.articles
                });
                console.log(this.state.posts);
            } else {
                this.setState({
                    posts: [
                        {
                            title: 'no posts',
                            description: 'no posts'
                        }
                    ]
                });
                console.log(this.state.posts);
            }


        }).catch(function (err) {
            console.log("ERR");
            console.log(err);
        });
    }

    createMarkup(html) {
        return { __html: html }
    }

    render() {

        return (
            <div>
                {
                    this.state.posts.map((post, index) => (
                        <div className={`box card-${index}`} key={index}>
                            <a className="media" href={`${post.url}`} key={index} target="_blank">
                                <div className="media-left">
                                    <img className="image is-128x128" src={post.urlToImage} alt="Image" />
                                </div>
                                <div className="media-content">
                                    <h4 className="card-title">
                                        <strong>{post.title}</strong>

                                    </h4>
                                    <div className="content">
                                        <p className="card-excerpt" dangerouslySetInnerHTML={
                                            this.createMarkup(post.description)
                                        } />
                                        {/* <small> by {post.author}</small> */}
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default PostList;