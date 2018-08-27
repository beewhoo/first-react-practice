import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


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
  comments={post.comments}/> , document.getElementById('root'));
registerServiceWorker();
