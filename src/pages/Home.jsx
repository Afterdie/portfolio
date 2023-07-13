import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Home() {
    const [isHovering, setIsHovering] = useState(false)
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })  
  const [spanHover, setSpanHover] = useState(false)

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMovement)
  
    return () => {
      window.removeEventListener('mousemove', handleMouseMovement)
    }
  }, [])
  
  const handleMouseMovement = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    })
  }

  const handleHover = ()=> {
    setIsHovering(!isHovering)
    console.log(isHovering);
  }
  const handleSpanHover = () => {
    setSpanHover(!spanHover)
    console.log("span was hovered");
  }
  const variants = {
    default:{
      x: mousePosition.x,
      y: mousePosition.y  
    },
    span: {
      x: mousePosition.x -25,
      y: mousePosition.y -25,
      scaleY: 1.4,
      scale: 1.3,
      rotate: -45 
    }
  }
  return (
    <div className='flex flex-col w-full h-full pb-10'>
        <motion.div className={`fixed w-[50px] h-[50px] bg-blue-500 z-20 pointer-events-none mix-blend-difference ${spanHover?"rounded-tr-full rounded-bl-full":""}`}
          variants={variants}
          animate={spanHover?"span":"default"}
        />
        <motion.div 
          animate={{
            y:isHovering?-200:0,
            scale: isHovering? 0.98:1
          }}
        className='bg-black h-full w-full z-30'></motion.div>
        <div className='bg-blue-500 h-[200px] w-full absolute bottom-0 cursor-none flex justify-center items-center z-10' onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <h1 className={`font-primary text-[20px] transition-all duration-300 ${isHovering?" text-[30px]":""}`}>sure you can look, but can you
            <span className={`${spanHover?"underline ":""}`}
            onMouseEnter={handleSpanHover} onMouseLeave={handleSpanHover}> see</span>
             ?</h1>

        </div>
      </div>
  )
}
