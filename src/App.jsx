import React, {useState, useEffect} from 'react'
import './App.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Home from './pages/Home'

export default function App() {
  
  return (
    <div className='w-[100vw] h-[100vh] bg-black '>
      <Home/>
    </div>
  )
}
