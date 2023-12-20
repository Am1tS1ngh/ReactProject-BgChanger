import { useState } from 'react'
import reactLogo from './assets/react.svg'



function App() {
  const [bgColor, setBgColor] = useState("#818cf8")
  return (
    <>
    <div className="w-full h-screen duration-200 pt-20" style={{backgroundColor: bgColor}}>
      <div className='px-4 py-2 bg-gray-100 mx-auto w-2/3 rounded-2xl flex flex-wrap justify-between items-center'>
        <button onClick={()=>{setBgColor("red")}} className='px-4 py-2 font-bold text-white rounded-2xl' style={{backgroundColor: 'red'}}>Red</button>
        <button onClick={()=>{setBgColor("green")}} className=' px-4 py-2 font-bold text-white rounded-2xl' style={{backgroundColor: 'green'}}>Green</button>
        <button onClick={()=>{setBgColor("blue")}} className=' px-4 py-2 font-bold text-white rounded-2xl' style={{backgroundColor: 'blue'}}>Blue</button>
        <button onClick={()=>{setBgColor("olive")}} className='px-4 py-2 font-bold text-white rounded-2xl' style={{backgroundColor: 'olive'}}>Olive</button>
        <button onClick={()=>{setBgColor("gray")}} className=' px-4 py-2 font-bold text-white rounded-2xl' style={{backgroundColor: 'gray'}}>Gray</button>
        <button onClick={()=>{setBgColor("yellow")}} className='px-4 py-2 font-bold text-white rounded-2xl' style={{backgroundColor: 'yellow'}}>Yellow</button>
        <button onClick={()=>{setBgColor("pink")}} className='px-4 py-2 font-bold text-white rounded-2xl' style={{backgroundColor: 'pink'}}>Pink</button>
        <button onClick={()=>{setBgColor("purple")}} className=' px-4 py-2 font-bold text-white rounded-2xl' style={{backgroundColor: 'purple'}}>Purple</button>
        <button onClick={()=>{setBgColor("lavender")}} className='px-4 py-2 font-bold text-black rounded-2xl' style={{backgroundColor: 'lavender'}}>Lavender</button>
        <button onClick={()=>{setBgColor("white")}} className=' px-4 py-2 font-bold text-black rounded-2xl' style={{backgroundColor: 'white'}}>White</button>
        <button onClick={()=>{setBgColor("black")}} className='px-4 py-2 font-bold text-white rounded-2xl' style={{backgroundColor: 'black'}}>Black</button>
      </div>
      <div className='flex items-center justify-center mt-10'>
      <button onClick={()=>{setBgColor("#818cf8")}} className='bg-gray-100 px-4 py-2 font-bold text-black rounded-2xl'>Reset</button>
      </div>
      </div>
    </>
  )
}

export default App
