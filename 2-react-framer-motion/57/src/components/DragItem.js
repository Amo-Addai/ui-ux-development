import React, { useState } from "react";

import { motion } from 'framer-motion'

export default function DragItem ({ post }) {
  
  const [isDragging, setIsDragging]= useState(false)

  return (
    <motion.div 
        className='card'
        layout
        drag="y" 
        dragConstraints={{ top: 0, bottom: 0 }}
        animate={{ scale: isDragging ? 1.05 : 1 }}
        key={post}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
    >
      <h4>List Item {post}</h4>
      <p>this is inside the card</p>
    </motion.div>
  )
}
