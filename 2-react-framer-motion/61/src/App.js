import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./styles.css";

const posts = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export default function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1 className="fake-logo">Animated Router</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>

        <Switch>
          <Route path="/about">
            <div className="layout">
              <h3>Who we are</h3>
            </div>
          </Route>
          <Route path="/contact">
            <div className="layout">
              <h3>Positive Contact!</h3>
            </div>
          </Route>
          <Route path="/">
            <div className="layout">
              <h3>Blog Posts</h3>
              {posts.map((post) => (
                <div className="card" key={post}>
                  <h4>Post Number one</h4>
                  <p>this is inside the card</p>
                </div>
              ))}
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
