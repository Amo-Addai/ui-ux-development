import React, { useState } from "react";

import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'

import "./styles.css";

export default function App() {
  const [loggedIn, setIsLoggedIn] = useState("");
  return (
    <div className="App">
      <header>
        <h1 className="fake-logo">Sign In/Up</h1>
      </header>
      <main className="layout">
        <button onClick={() => setIsLoggedIn("signin")}>Sign In</button>
        <AnimateSharedLayout>
          <AnimatePresence>
            {loggedIn && (
              <>
                <motion.div 
                  className="modal"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 100 }}
                  >
                  <motion.div layout className="card">
                    <AnimatePresence exitBeforeEnter>
                      {loggedIn === "signin" && (
                        <SignIn key="signin" setIsLoggedIn={setIsLoggedIn} />
                      )}
                      {loggedIn === "signup" && (
                        <SignUp key="signup" setIsLoggedIn={setIsLoggedIn} />
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
                <motion.div 
                  className="overlay" 
                  onClick={() => setIsLoggedIn("")} 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              </>
            )}
          </AnimatePresence>
        </AnimateSharedLayout>
      </main>
    </div>
  );
}
