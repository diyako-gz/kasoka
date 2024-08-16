import React from 'react'
import ImagText from './imagText'
import Discription from './discription'

export default function texts() {
  return (
    <div className='grid grid-cols-2 mx-[80px] mt-[100px]'>
        <Discription/>
        <ImagText/>
    </div>
  )
}
