import { useState } from 'react'

function App() {
const [colour, setcolour] = useState("olive");
  return (
    <>
      <div className='w-full h-screen' style={{ backgroundColor:colour }}>
        <div className='fixed bottom-10 inset-x-0  flex justify-center '>
          <div className='bg-white flex justify-center p-3 gap-3 text-white rounded-4xl'>
            <button className='bg-black p-2 rounded-full' onClick={()=>setcolour("black")}>Black</button>
            <button className='bg-blue-600 p-2 rounded-full' onClick={()=>setcolour("blue")}>Blue</button>
            <button className='bg-green-500 p-2 rounded-full' onClick={()=>setcolour("green")}>Green</button>
            <button className='bg-yellow-400 p-2 rounded-full' onClick={()=>setcolour("yellow")}>Yellow</button>
            <button className='bg-orange-600 p-2 rounded-full' onClick={()=>setcolour("orange")}>Oragne</button>
            <button className='bg-pink-600 p-2 rounded-full' onClick={()=>setcolour("pink")}>Pink</button>
            <button className='bg-purple-400 p-2 rounded-full' onClick={()=>setcolour("purple")}>Purple</button>
            <button className='bg-red-500 p-2 rounded-full' onClick={()=>setcolour("red")}>Red</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
