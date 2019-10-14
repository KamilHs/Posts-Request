import React from 'react';
import "./main.css";

export default class Posts extends React.Component {
    state = {
        posts: [],
        isLoading: true,
    };


    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(result => {
                const responsedPosts = result.map(post => ({ userId: post.userId, title: post.title, body: post.body.substring(0,50) }));
                this.setState({ isLoading: false, posts: responsedPosts });
            });
    }


    render() {
        return (
            <div className="main-container">
                <h1>Posts</h1>
                {this.state.isLoading && <p>Loading...</p>}
                <div className="posts-container">
                    <ul>
                        {this.state.posts.map((post,index) =>(
                        <li key={index}>
                            <h2 className="title">{post.title}</h2>
                            <p>{post.body}</p>
                            </li>))}

                    </ul>
                </div>
            </div>
        )
    }
}