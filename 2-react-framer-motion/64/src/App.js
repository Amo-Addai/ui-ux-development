import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import Confetti from 'react-confetti'
import useInterval from '@use-it/interval'

import "./styles.css";

export default function App() {

  const [count, setCount] = useState(10)
  const [isComplete, setIsComplete] = useState(false)

  useInterval(() => {
    setCount(prevCount => {
      if (prevCount > 0) return prevCount - 1
      setIsComplete(true)
    })
  }, 1000)

  return (
    <div className="App">
      {isComplete && <Confetti />}
      <AnimatePresence>
        <motion.h2 
          key={`countdown${count}`}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, position: 'absolute', y: 40 }}
        >
          {count}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
}
