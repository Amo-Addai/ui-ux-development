import React from "react";

import { motion } from 'framer-motion'

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <main className="layout" style={{ display: 'flex', justifyContent: 'center' }}>
        <motion.div 
          className="box" 
          initial={{ x: -200 }}
          animate={{ x: 200 }}
          transition={{
            type: 'spring',
            repeat: Infinity, // Infinity/int
            repeatType: 'mirror', // loop/reverse/mirror
            repeatDelay: 2
          }}
        />
      </main>
    </div>
  );
}
