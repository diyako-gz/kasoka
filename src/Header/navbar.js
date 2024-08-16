import React from 'react'
import Header from './header'

export default function navbar() {
  return (
    <div className=' bg-gray-800/100'>
        <div className="flex justify-center">
            <ul className='flex p-[15px]'>
                <li className='mr-[50px]'>
                    <a href="" className='text-gray-300 hover:text-yellow-500'>درباره ما</a>
                </li>
                <li className='mr-[50px]'>
                    <a href="" className='text-gray-300 hover:text-yellow-500'>لیست اساتید</a>
                </li>
                <li className='mr-[50px]'>
                    <a href="" className=' text-gray-300 hover:text-yellow-500'>دوره ها</a>
                </li>
                <li className='mr-[50px]'>
                    <a href="" className='text-gray-300 hover:text-yellow-500'>ارتباط با ما</a>
                </li>
                <li className='mr-[50px]'>
                    <a href="" className='text-gray-300 hover:text-yellow-500'>خانه</a>
                </li>
            </ul>
        </div>
    </div>
    
    
  )
}
