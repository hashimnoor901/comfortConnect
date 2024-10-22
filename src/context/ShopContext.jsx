import { createContext, useEffect, useState } from "react";
import {products} from '../assets/products'
import { toast } from "react-toastify";
export const ShopContext = createContext()

const ShopContextProvider = (props)=>{
  const currency = '$';
  const delivery_fee =10;
  const [search,setSearch]= useState('')
  const [showSearch,setShowSearch]=useState(true)
  const [cartItems,setCartItems] = useState({})

  const addToCart =async (itemId,size)=>{

    if(!size){
      toast.error('please select your size')
      return
    }
    // structured clone is used  for copy object 
    let cartData = structuredClone(cartItems) 
    console.log(cartData[itemId])
    if(cartData[itemId]){
        if(cartData[itemId][size]){
          cartData[itemId][size]+=1
        }
        else{
          cartData[itemId][size] =1
        }
    }
    else{
      cartData[itemId] ={}
      cartData[itemId][size] =1
    }
    setCartItems(cartData)
    console.log(cartItems)

  }
  useEffect(()=>{
    console.log(cartItems)
  },[cartItems])
  const value ={
    products ,currency,delivery_fee,search,setSearch,showSearch,setShowSearch,cartItems,addToCart,
  }
  return(
    <ShopContext.Provider value={value} >
{props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;