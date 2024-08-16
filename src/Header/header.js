import React from 'react'
import Navbar from './navbar'
import Image from './images/alley.jpg'

export default function Header() {
  return (
    
    <div className=''>
        <Navbar/>
        <div className="">
            <div className=" relative">
                    <div className="">
                        <img src={Image} className='h-[700px] w-full object-cover' alt="" />
                    </div>
            </div>

            <div className=" absolute top-[200px] left-[400px]">
                <h1 className=' font-bold text-[180px] text-yellow-600 '>KASOKA</h1>
            </div>
            <div className=" absolute top-[500px] left-[680px]">
                <button className="border bg-yellow-600 rounded-lg p-[10px] w-[150px] font-mono font-extrabold text-gray-700 border-none  hover:bg-gray-700 hover:text-gray-400">درباره ما</button>
            </div>
        </div>
        
    </div>
  )
}



