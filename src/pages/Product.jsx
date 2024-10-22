import React, { useContext, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { asset } from '../assets/asset'
import RelatedProducts from '../components/RelatedProducts'

const Product = () => {
  // useparams returns a dynamic parameter of the URL that the user is currently on
  
  const {productId }= useParams()
  console.log(productId)
  const {products,currency,addToCart}= useContext(ShopContext)
  const [productData,setProductData] = useState(false)
  const [image,setImage] = useState('')
  const [size,setSize] = useState('')
  

  const fetchProductData = async ()=>{
        products.map((item)=>{
            if(item.id == productId){
              setProductData(item)
              // console.log(item)
              setImage(item.image[0])
              return null
            }
        })
  }
  useEffect(()=>{
    fetchProductData()
  },[productId])
  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100' >
      {/*------- product Data ---------*/}
      <div className='flex gap12 sm:gap-12 flex-col sm:flex-row' >
      {/* ---------Product images---------- */}
      <div className='flex-1 flex flex-col-reverse  gap-3 sm:flex-row' >
          <div className='flex flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full' >
      {
        productData.image.map((item,index)=>(
<img onClick={()=>setImage(item)} className='w-[34%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer ' src={item} key={index} alt=""/>
        ))
      }
          </div>
          <div className='w-full sm:w-[80%]' >
            <img className='w-full h-auto' src={image} alt=""/>

          </div>
      </div>
      {/* -------------product info -------------*/}
      <div className='flex-1' >
          <h1 className='font-medium text-2xl mt-2' >{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2' >
            <img src={asset.star} alt="" className="w-5"/>
            <img src={asset.star} alt="" className="w-5"/>
            <img src={asset.star} alt="" className="w-5"/>
            <img src={asset.star} alt="" className="w-5"/>
            <img src={asset.stardull} alt="" className="w-5"/>
            <p className='pl-2 ' >(122)</p>
          </div>
          <p className='mt-5 text-3xl  font-medium' >{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 w-4/5' >{productData.description}</p>
          <div className='flex flex-col gap-4 my-8' >
          <p>Select Size</p>
          <div className='flex gap-2' >
            {
              productData.sized.map((item,index)=>(
                <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ?'border-orange-500':''} `} key={index}  >{item}</button>
              ))
            }

          </div>
          </div>
          <button onClick={()=>addToCart(productData.id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-400 ' >
            ADD TO CART
          </button>
          <hr className='mt-4 sm:w-4/5' />
            <div className='text-sm text-gray-500 mt-5 flex-col gap-1' >
              <p>100% Original Product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>EAsy return and exchange policy within 7 days.</p>
            </div>
      </div>
      </div>
      {/* Desscription and review */}

      <div className='mt-20' >
        <div className='flex' >
          <b className='border px-5 py-3 text-sm' >Desscription</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
            <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500 ' >
              <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtula marketplace where bussiness and individuals  Shop confidently knowing that every item is of the highest quality.Our mission is to provide an exceptional shopping experience that’s fast, convenient, and secure.Be the first to know about our latest products, exclusive deals, and flash sales by signing up for our newsletter. Don't miss out on special offers that can save you up to [X%] on your next purchase.</p>
              <p>We’re dedicated to offering you the best in [Product Categories], with a focus on [key differentiators, like sustainability, affordability, or customer service]. Our mission is to provide an exceptional shopping experience that’s fast, convenient, and secure.</p>
            </div>
      </div>
      {/* Display relatd products */}
      <RelatedProducts category={productData.category} subcategory={productData.subcategory} />

    </div>
    
  ) : <div className='opacity-0' >
    
  </div>
}

export default Product
