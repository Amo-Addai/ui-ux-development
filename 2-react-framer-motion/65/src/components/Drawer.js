import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import Drawer from './components/Drawer'

import "./styles.css";

export default function Drawer({ children }) {

  const [isActive, setIsActive] = useState(false)

  return (
    <>
        <motion.div 
            className="drawer-wrapper" 
            style={{ pointerEvents: isActive ? 'all' : 'none' }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            onDragEnd={(_, info) => {
                // console.log(info)
                if (info?.offset?.y > 300) setIsActive(false)
                if (info?.offset?.y < -300) setIsActive(true)
            }}
        >
            <motion.div
                style={{ pointerEvents: 'all' }}
                animate={{ opacity: 1, y: isActive ? 0 : '80vh' }}
                transition={{ damping: 25, type: 'spring' }}
            >
                <div className="drawer">{children}</div>
            </motion.div>
        </motion.div>
        <motion.div
            className="drawer--background"
            style={{ pointerEvents: isActive ? 'all' : 'none' }}
            onClick={() => setIsActive(false)}
            animate={{ opacity: isActive ? 1 : 0 }}
        />
    </>
  );
}
