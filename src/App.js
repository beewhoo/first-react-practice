
import React from 'react';
import './App.css';

import Blog from './Blog.js';
import Home from './Home.js';
import About from './About.js';
import Movie from './Movie.js';
import Food from './Food.js';



import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


const post = {
  title: "Baby's first post",
  authors: [
    "Stealthy Stegosaurus",
    "Tiny trex"
  ],
  body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  comments: [
    "First!",
    "Great post!",
    "hire him!"
  ]
}

const App = () => (

  <Router>
    <div>
      <nav>
        <Link to="/">Home</Link>{' '}
        <Link to="/blog">My Blog</Link>{' '}
        <Link to="/about">About me</Link>{' '}
        <Link to="/movie">Favorite movie</Link>{' '}
        <Link to="/food">Favorite Food</Link>
      </nav>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/movie" component={Movie}/>
      <Route path="/food" component={Food}/>
      <Route path="/blog" component={
        () => (<Blog title={post.title}
                  allAuthors={post.authors}
                  body={post.body}
                  comments={post.comments} />
        )}/>
    </div>
  </Router>
)

export default App
