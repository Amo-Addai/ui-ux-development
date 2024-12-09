import React from 'react'

export default function Slide ({ isActive, direction = 1, distance = 200, children }) {
    // return isActive && children
    return (
        <>
            {isActive && (
                <div
                    initial={{ opacity: 0, x: direction * distance }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -distance }}
                >
                    {children}
                </div>
            )}
        </>
    )
}