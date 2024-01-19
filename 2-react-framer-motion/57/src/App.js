import React from "react";

import DragItem from './components/DragItem'

import "./styles.css";

const posts = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export default function App() {
  return (
    <div className="App">
      <header>
        <h1 className="fake-logo">Drag & Drop</h1>
      </header>
      <div className="layout">
        <h3>List of stuff</h3>
        {posts.map(post => (
          <DragItem post={post} key={post} />
        ))}
      </div>
    </div>
  );
}
