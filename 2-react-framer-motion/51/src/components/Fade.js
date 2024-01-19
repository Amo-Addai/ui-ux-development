import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Fade ({ isActive, children }) {
    // return isActive && children
    return (
        <AnimatePresence>
            {isActive && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}