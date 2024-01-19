import React from "react";

import DragItem from './components/DragItem'

import { usePositionReorder } from "./hooks/usePositionReorder";

import "./styles.css";

const posts = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export default function App() {

  const [ order, updatePosition, updateOrder ] = usePositionReorder(posts)

  return (
    <div className="App">
      <header>
        <h1 className="fake-logo">Drag & Drop - 3</h1>
      </header>
      <div className="layout">
        <h3>List of stuff</h3>
        {order.map((post, i) => (
          <DragItem 
            index={i}
            post={post} 
            key={post} 
            updatePosition={updatePosition} 
            updateOrder={updateOrder} 
          />
        ))}
      </div>
    </div>
  );
}
