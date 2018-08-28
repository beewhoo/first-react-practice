import React, { Component } from 'react';
import './App.css';
import Comment from './Comment.js';
import Author from './Author.js';

class App extends Component {

  constructor (props) {
    super()
    this.state = {
      body: props.body
    }

  }

  changeBody (e){
    let newBody = prompt('what should the new body be?')
    this.setState({
      body:newBody
    })
  }

  handleFormInput (e){
    console.log(e);
    this.setState({
      body:e.target.value
    })
  }

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
      <p> {this.state.body}</p>
      <button onClick={(e) => this.changeBody(e)}>Edit Body</button>
      <input type="text" onChange={(e) => this.handleFormInput(e)} />
      <h3> Comments </h3>
      {comments}

    </div>
    );
  }
}

export default App;
