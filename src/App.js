import React, { Component } from 'react';
import './App.css';
import Comment from './Comment.js';
import Author from './Author.js';

class App extends Component {
  render() {
    let authors = this.props.allAuthors.map( (author,index)=>(

      <Author author={author}/>
    )

    )

    let comments = this.props.comments.map((comment, index)=>(
      <Comment comment={comment}/>
    )

    )


    return (
    <div>
      <h1>{this.props.title}</h1>
        {authors}
      <p> {this.props.body}</p>
      <h3> Comments </h3>
      {comments}

    </div>
    );
  }
}

export default App;
