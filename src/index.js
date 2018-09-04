import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Blog from './Blog.js';
import Home from './Home.js';
import About from './About.js';
import Movie from './Movie.js';
import Food from './Food.js';


var post = {
title: "Dinosaurs are awesome",
authors: [
  "Bibek Thapa",
  "Shaer Alam",
  "Malik Chabou"
],
body: 'lorem ipsum',
comments: [
  'comment 1',
  'comment 2'
]

}


ReactDOM.render(<App
  title={post.title}
  allAuthors={post.authors}
  body={post.body}
  comments={post.comments}/> , document.getElementById('root'));
registerServiceWorker();
