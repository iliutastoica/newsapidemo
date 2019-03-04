import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {}
        };
        this.createMarkup = this.createMarkup.bind();
    }

    componentDidMount() {
        const slug = this.props.match.params.slug || this.props.match.params.url;
    }

    createMarkup(html) {
        return { __html: html }
    }

    render() {
        let build;
        return build;
    }
}

export default PostView;