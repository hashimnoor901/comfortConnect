import React from 'react'
import {asset} from "../assets/asset"
const Hero = () => {
  return (
    <div className='  flex flex-col-reverse sm:flex-row md:h-[80vh] justify-between' >
      {/* hero left side */}
      <div className='  w-full sm:w-1/2 flex items-center sm:justify-center py-10 sm:py-0'> 
      <div className='' >
       
        <h1 className='text-[30px] 2xl:text-[70px] max-w-3xl manrop !font-extrabold sm:py-3 lg:text-[40px] ' >Get an Emotional <span className='text-[#EC744A]' >Support  Letter </span> Consultation You Can Trust.</h1>
<div className="flex items-center gap-2 ">
  <p className='font-semibold poppins w-[80%] text-sm mt-10 md:text-base 2xl:text-lg'>Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam. </p>
  
  {/* <p className='w-8 md:w-11 h-[1px] bg-[#414141]' ></p> */}
</div>
<button className=' bg-[#EC744A] text-white mt-10 rounded-full text-2xl  font-medium manrop px-14 py-4' >
  Get started      </button>
      </div>

      </div>
      {/* hero right side */}
      <div className='sm:w-2/5' >

      <img className='w-full  ' src={asset.hero} alt="..."/>
      </div>
      
    </div>
  )
}

export default Hero
