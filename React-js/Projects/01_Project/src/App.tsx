import React, { useState } from 'react'

function App() {

  const [bg, setBg] = useState('black')

  const styles = {
    background: `${bg}`
  }

  return (
    <div className='bg-[#333] min-h-screen grid place-content-center '>
      <div style={styles} className="w-md rounded-2xl shadow-2xl bg-amber-50 text-center p-40">
        <span className='bg-amber-50 px-5 rounded-2xl font-bold py-3 text-slate-950'>{bg}</span>
      </div>
      <input
        type="text"
        placeholder='Enter Color.'
        className='w-md py-3 px-2 border border-amber-50 rounded-2xl text-slate-50'
        value={bg}
        onChange={e => setBg(e.target.value)}
      />
    </div>
  )
}

export default App
