import React from 'react'
import { useState } from 'react'

function ColorPanel() {

  let [color, setColor] = useState({background : "black"})

  function activateRed() {
    setColor({background : "red"})
  }

  function activateGreen() {
    setColor({background : "green"})
  }

  function activateBlue() {
    setColor({background : "blue"})}

  function activateOlive() {
    setColor({background : "#808000"})
  }
  function activateGray() {
   setColor({background : "#333"}) 
  }

  function activateYellow() {
   setColor({background : "yellow"})
  }

  function activatePink() {
   setColor({background : "pink"}) 
  }

  function activatePurple() {
   setColor({background : "purple"})
  }

  function activateLavender() {
    setColor({background : "#E6E6FA"})
  }

  function activateWhite() {
   setColor({background : "white"}) 
  }

  function activateBlack() {
   setColor({background : "black"}) 
  }


  return (
    <div className='min-h-screen min-w-screen text-slate-50 absolute' style={color}>
        <div className='flex gap-4 border py-2 px-1.5 left-1/4 absolute bottom-0  mb-16 justify-center text-center rounded-2xl '>
          <button className='active:animate-bounce border px-3 py-1.5 rounded-xl bg-red-500'  onClick={activateRed}>Red</button>
          <button className='active:animate-bounce border px-3 py-1.5 rounded-xl bg-green-500' onClick={activateGreen}>Green</button>
          <button className='active:animate-bounce border px-3 py-1.5 rounded-xl bg-blue-500' onClick={activateBlue}>Blue</button>
          <button className='active:animate-bounce border px-3 py-1.5 rounded-xl bg-[#808000]' onClick={activateOlive}>Olive</button>
          <button className='active:animate-bounce border px-3 py-1.5 rounded-xl bg-gray-500' onClick={activateGray}>Gray</button>
          <button className='active:animate-bounce border px-3 py-1.5 rounded-xl bg-yellow-500' onClick={activateYellow} >Yellow</button>
          <button className='active:animate-bounce border px-3 py-1.5 rounded-xl bg-pink-500' onClick={activatePink}>Pink</button>
          <button className='active:animate-bounce border px-3 py-1.5 rounded-xl bg-purple-500' onClick={activatePurple}>Purple</button>
          <button className='active:animate-bounce border px-3 py-1.5 rounded-xl bg-[#E6E6FA] text-black' onClick={activateLavender}>Lavender</button>
          <button className='active:animate-bounce border px-3 py-1.5 rounded-xl bg-white text-black' onClick={activateWhite} >White</button>
          <button className='active:animate-bounce border px-3 py-1.5 rounded-xl bg-black' onClick={activateBlack}>Black</button>
        </div>
    </div>
  )
}

export default ColorPanel
