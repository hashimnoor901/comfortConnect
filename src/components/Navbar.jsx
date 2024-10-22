import React, {  useState } from 'react'
import { asset } from '../assets/asset'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
  const [visible,setVisible] = useState(true)
  const [showSearch,setShowSearch] = useState(false)
  return (
    <div className='flex items-center justify-between pt-6 lg:pt-12 2xl:pt-20 ' >
    <Link className='flex items-center gap-4 ' to='/' >  <img src={asset.logo} alt="logo" className='w-12'/>
    
        <p className=' 2xl:text-3xl font-medium' >ComfortConnect</p></Link>
      <ul className='hidden sm:flex gap-12 text-lg poppins font-normal text-[#1A1A1A
]' >
        <NavLink to='/' className='flex flex-col items-center gap-1' >
          <p>Home</p>
          {/* <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' /> */}
          
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1' >
          <p>Aboout</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          
        </NavLink>
        <NavLink to='/services' className='flex flex-col items-center gap-1' >
          <p>Services</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          
        </NavLink>
        <NavLink to='/page' className='flex flex-col items-center gap-1' >
          <p>Page</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          
        </NavLink>
      </ul>
      <div className=' bg-[#EC744A] hidden sm:block text-white cursor-pointer rounded-full text-xs lg:text-2xl font-medium manrop md:px-6 md:py-2 2xl:px-14 2xl:py-4' >
            Contact Us
      </div>
      {/* sidebar for smaller screen */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ?  'w-full':'w-0'} `}>

          <div className='flex flex-col text-gray-600' >
            <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3' > 
              <img src={asset.back} className='h-4 ' alt="cross"/>
                  <p>Back</p>
            </div>
            <NavLink onClick={()=>setVisible(false)} className='py-2 border' to='/' >
                Home
            </NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 border' to='/' >
                About
            </NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 border' to='/' >
                Services
            </NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 border' to='/' >
                Page
            </NavLink>
            <NavLink  onClick={()=>setVisible(false)} className='py-2 !bg-[#EC744A] border' to='/' >
            Contact Us

            </NavLink>
            
          </div>
      </div>
      <img className='sm:hidden' src={asset.menu} onClick={()=>setVisible(!visible)} alt=""/>

    </div>
  )
}

export default Navbar
