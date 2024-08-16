import React from 'react'


export default function servicmpnt(props) {
  return (
    <div className='flex flex-col border border-2 rounded-xl p-[10px] w-[300px] mb-[50px]'>
        <div className="flex justify-center">
            <img src={props.logo} className='w-[100px]' alt="" />
        </div>
        <div className="flex justify-center pt-[10px]">
            <p className='font-semibold text-[20px] text-yellow-600'>لورم اپیسوم</p>
        </div>
        <div className="flex justify-center pt-[]10px">
            <p className='font-light'>لورم اپیسوم</p>
        </div>
    </div>
  )
}
