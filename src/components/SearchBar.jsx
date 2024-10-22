import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { asset } from '../assets/asset'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
  const {search,setSearch,showSearch,setShowSearch} = useContext(ShopContext)
  const [visible,setVisible]= useState(false)
  const location = useLocation()
  useEffect(()=>{
    // console.log(location.pathname)
    if(location.pathname.includes('collection') ){
      setVisible(true)
    }
    else{
      setVisible(false)
    }
  },[location])
  // it will show when show search true
  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center' >
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 ' >
        <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" className='flex-1 outline-none bg-inherit text-sm' placeholder='Search' />
        <img className='w-4' src={asset.search} alt="search"/>
      </div>
      <img onClick={()=>setShowSearch(false)} className='inline w-3 cursor-pointer' src={asset.cross} alt=""/>
    </div>
  ):null
}

export default SearchBar