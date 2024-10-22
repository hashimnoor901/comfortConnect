import React from 'react'
import { asset } from '../assets/asset'

const Footer = () => {
  return (
    <div>
    <div className='flex flex-col items-start sm:grid grid-cols-[3fr_1fr_1fr] gap-14  my-10 mt-40 text-sm' >

      <div>
        <img src={asset.logo} className='mb-5 w-32' alt=""   />
        <p className='w-full md:w-2/3 text-gray-300' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam eligendi iure sunt est doloribus a natus fugit aspernatur voluptatum blanditiis! Obcaecati libero porro labore vel voluptatem doloribus corporis eveniet repellat?</p>
      </div>
      <div>
        <p className='text-xl font-medium mb-5' >COMPANY</p>
        <ul className='flex flex-col gap-1 text-gray-600' >
          <li>Home</li>
          <li>About Us</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>

        </ul>
      </div>
      <div>
        <p className='text-xl font-medium mb-5' >GET IN TOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
          <li>+92 311 6662412</li>
          <li>hashimn901@gmail.com</li>
        </ul>
      </div>
      
    </div>
    <div>
        <hr/>
        <p className='py-5 text-sm text-center ' >Copyright 2024 forever.com ALL Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
