import React from 'react'
import Brandicons from './brandicons'
import BrandTitle from './brandTitle'
import logoeins from './imags/google-removebg-preview.png'
import logotzwei from './imags/whats-app-removebg-preview.png'
import logoDrei from './imags/instagram-logo-png-transparent-background-1024x1024.png'
import logovier from './imags/facebook_logo_icon_181322.png'

export default function brands() {

    const icons = [
        {imags:logoeins , adrrese:"https://www.google.com/"} , 
        {imags:logotzwei , adrrese:"https://www.google.com/"} ,
        {imags:logoDrei , adrrese:"https://www.google.com/"} ,
        {imags:logovier , adrrese:"https://www.google.com/"}
    ]

  return (
    <div className='mt-[50px] bg-yellow-500/100 p-[30px] h-[230px] '>
        <div className="flex justify-center">
            <BrandTitle/>
        </div>
        <div className="grid grid-cols-4 mt-[50px]">
        <Brandicons {...icons[0]}/>
        <Brandicons {...icons[1]}/>
        <Brandicons {...icons[2]}/>
        <Brandicons {...icons[3]}/>
        </div>
        <br /><br />
    </div>
  )
}
