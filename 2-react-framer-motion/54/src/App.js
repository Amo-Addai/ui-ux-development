import React, { useState } from "react";

import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'

import "./styles.css";

const images = ["1000", "1001", "1002", "1003", "1004", "1005", "1006", "1008"];

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="App">
      <AnimateSharedLayout>
        <motion.header layoutId="header" onClick={() => setIsLoading(!isLoading)}>
          <motion.h1 layoutId="logo" className="fake-logo">Loading Gif</motion.h1>
        </motion.header>
        <main className="layout">
          <h3>Photo Gallery</h3>
          <AnimatePresence>
            {isLoading && (
              <motion.div layoutId="header" className="loading" onClick={() => setIsLoading(!isLoading)}>
                <motion.h3 layoutId="logo">Loading Gif</motion.h3>
                <motion.div exit={{ opacity: 0 }}>
                  <p>Is Loading ...</p>
                  <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 100 }}
                    transition={{
                      flip: Infinity, duration: 1
                    }}
                    style={{
                      height: 6,
                      width: 100,
                      background: 'var(--primary)',
                    }}
                  />
                  <motion.div
                    initial={{ x: -180, y: -5 }}
                    animate={{ x: 180, y: -5 }}
                    transition={{
                      flip: Infinity, duration: 1.2
                    }}
                    style={{
                      height: 8,
                      width: 20,
                      background: 'var(--danger)',
                    }}
                  />
                  <motion.div
                    initial={{ x: -100, y: -5 }}
                    animate={{ x: 100, y: -5 }}
                    transition={{
                      flip: Infinity, duration: 1.5
                    }}
                    style={{
                      height: 4,
                      width: 200,
                      background: 'var(--yellow)',
                    }}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="grid gallery">
            {images.map((image, index) => (
              <img
                style={{
                  cursor: "pointer"
                }}
                src={`https://picsum.photos/seed/${image}/500/300`}
                alt="placeholder"
              />
            ))}
          </div>
        </main>
      </AnimateSharedLayout>
    </div>
  );
}
