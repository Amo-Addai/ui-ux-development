import React, { useState } from "react";

import { motion } from 'framer-motion'

import { useMeasurePosition } from "./hooks/useMeasurePosition";

export default function DragItem ({ index, post, key, updatePosition, updateOrder }) {
  
  const [isDragging, setIsDragging]= useState(false)
  const ref = useMeasurePosition(position => {
    updatePosition(index, position)
  })

  return (
    <motion.div 
      className='card'
      ref={ref}
      layout
      drag="y" 
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={1}
      animate={{ scale: isDragging ? 1.05 : 1 }}
      key={post} // prop -> key == post already
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      onViewportBoxUpdate={(_, delta) => {
        if (isDragging) updateOrder(index, delta?.y?.translate)
      }}
    >
      <h4>List Item {post}</h4>
      <p>this is inside the card</p>
    </motion.div>
  )
}
