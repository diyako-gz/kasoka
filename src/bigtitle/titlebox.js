import React from 'react'
import Image from './images/icons8-heart-50.png'


export default function titlebox(prop) {
  return (
    <div>
            <div className="">
            <div className="flex justify-center grid grid-col-1 p-[15px] border border-2 border-yellow-600 rounded-lg ml-[50px] w-[250px]">
              <div className="block">
                <img src={Image} alt="" className='bg-yellow-600 rounded-full p-[5px]'/>
              </div> 
              <p className='mt-[10px] font-bold flex justify-center'>{prop.name}</p>
              
            </div>
            </div>
    </div>
  )
}
