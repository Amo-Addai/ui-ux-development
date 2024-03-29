import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'

import { motion, AnimatePresence } from 'framer-motion'

export function RouteTransition({ children, ...props }) {

    return (
        <Route {...props} >
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, y: 200 }}
            >
                {children}
            </motion.div>
        </Route>
    )
}

export function AnimatedRoutes({ children }) {

    const location = useLocation()
    
    return (
        <AnimatePresence exitBeforeEnter>
            <Switch key={location.pathname} location={location}>
                {children}
            </Switch>
        </AnimatePresence>
    )
}
