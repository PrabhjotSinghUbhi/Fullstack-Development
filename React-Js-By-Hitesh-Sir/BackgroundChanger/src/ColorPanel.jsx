import React from 'react'
import { useState } from 'react'

function ColorPanel() {

  let [counter, setCounter] = useState({background : "black"})

  function activateRed() {
    setCounter({background : "red"})
  }

  function activateGreen() {
    setCounter({background : "green"})
  }

  function activateBlue() {
    setCounter({background : "blue"})}

  function activateOlive() {
    setCounter({background : "#808000"})
  }
  function activateGray() {
   setCounter({background : "#333"}) 
  }

  function activateYellow() {
   setCounter({background : "yellow"})
  }

  function activatePink() {
   setCounter({background : "pink"}) 
  }

  function activatePurple() {
   setCounter({background : "purple"})
  }

  function activateLavender() {
    setCounter({background : "#E6E6FA"})
  }

  function activateWhite() {
   setCounter({background : "white"}) 
  }

  function activateBlack() {
   setCounter({background : "black"}) 
  }


  return (
    <div className='min-h-screen min-w-screen text-slate-50 absolute' style={counter}>
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
