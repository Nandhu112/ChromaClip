import React from 'react'
import BackgroundRemover from './BackgroundRemover'

const App = () => {
  return (
    <div className="container mx-auto h-screen" style={{ background: 'linear-gradient(to right, #1b797e, #130318)' }}>
      <div className='p-3' style={{ backgroundColor: 'rgb(3 3 3 / 50%)' }}>

      <h1 className="text-3xl font-bold mb-4 text-center text-white ">Background Remover</h1>
      </div>
  
    {/* <h1 className="text-3xl font-bold mb-4">Upload an Image</h1> */}
    <BackgroundRemover/>
  </div>
   
  )
}

export default App

// api BG : AsijaPngiPpr7MS1LvAPVzAP