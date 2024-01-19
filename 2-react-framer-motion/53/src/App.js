import React, { useState } from "react";

import { motion } from 'framer-motion'

import "./styles.css";

export default function App() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className="App">
      <header>
        <h1 className="fake-logo">Title</h1>
      </header>
      <main className="layout">
        <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
        <motion.div layout className="card">
          <motion.h4 layout>Post Number one</motion.h4>
          {isToggled && (
            <p>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, voluptas corrupti. Deserunt dolorem quod amet ab commodi officiis necessitatibus, totam reprehenderit alias saepe eveniet? Vel cupiditate sequi illo sapiente? Voluptate mollitia dolorum perspiciatis, doloremque minus nihil dignissimos ea nostrum vitae, totam quidem ut eius dolore sequi officiis. Rem praesentium pariatur, ea sint repellat a mollitia neque cumque aliquid dignissimos natus ab velit eum provident architecto rerum repellendus? Enim fugit, aliquid id eligendi quibusdam nulla, rem est totam sequi et saepe excepturi ea iure. Pariatur, eum dolor voluptate dolores recusandae eligendi quae quis nihil, omnis mollitia quibusdam reprehenderit odio amet voluptatem?"</p>
          )}
        </motion.div>
      </main>
    </div>
  );
}
