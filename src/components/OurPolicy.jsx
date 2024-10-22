import React from 'react'
import { asset } from '../assets/asset'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700' >
      <div  >
<img src={asset.exchange}  className='w-12 m-auto mb-5' alt=".."/>
<p className='font-semibold' >Easy Exchange Policy</p>
<p className='text-gray-400' >We offer hassle free exchage policy</p>
      </div>
      <div>
<img src={asset.support}  className='w-12 m-auto mb-5' alt=".."/>
<p className='font-semibold' >Best Customer Support</p>
<p className='text-gray-400' >We provide 24/7 customer support</p>
      </div>
      <div  >
<img src={asset.exchange}  className='w-12 m-auto mb-5' alt=".."/>
<p className='font-semibold' >7 Days return policy</p>
<p className='text-gray-400' >We provide 7 days free return policy</p>
      </div>
    </div>
  )
}

export default OurPolicy
