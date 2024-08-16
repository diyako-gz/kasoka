import React from 'react'
import Servicmpnt from './servicmpnt'
import logoeins from './imags/google-removebg-preview.png'
import logotzwei from './imags/whats-app-removebg-preview.png'
import logoDrei from './imags/instagram-logo-png-transparent-background-1024x1024.png'
import logovier from './imags/facebook_logo_icon_181322.png'


export default function services() {

    const services = [
        {id:1 , servisName: 'google' , logo: logoeins} ,
        {id:2 , servisName: 'facebook' , logo: logovier} ,
        {id:3 , servisName: 'insta' , logo: logoDrei} ,
        {id:4 , servisName: 'whatsapp' , logo: logotzwei} ,
    ]

  return (
    <div className='mt-[100px]'>
        <div className="flex justify-end">
            <div className="flex justify-end mr-[170px]">
                <h2 className='font-bold text-[30px]'>سرویس های کاسکو</h2>
            </div>
        </div>
        <div className="grid grid-cols-3 ml-[100px] mt-[50px]">
            <Servicmpnt {...services[0]}/>
            <Servicmpnt {...services[0]}/> 
            <Servicmpnt {...services[0]}/>
            <Servicmpnt {...services[1]}/>
            <Servicmpnt {...services[1]}/>
            <Servicmpnt {...services[1]}/>
        </div>
    </div>
  )
}


