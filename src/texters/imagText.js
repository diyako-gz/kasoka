import React from 'react'
import Imag from './imags/alley.jpg'

export default function imagText() {
  return (
    <div className=''>
        <img src={Imag} alt="" className='h-[400px] w-full object-cover rounded-xl ' />
    </div>
  )
}
