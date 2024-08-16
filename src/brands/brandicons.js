import React from 'react'
import brands from './brands'

export default function brandicons(props) {
  return (
    <div className='flex justify-center'>
        <a href={props.adrrese}><img src={props.imags} className='w-[100px] p-[10px] hover:bg-yellow-400 hover:rounded-2xl ' alt="" /></a>
    </div>
  )
}
