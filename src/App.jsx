import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'

import Navbar from './components/Navbar'

  import 'react-toastify/dist/ReactToastify.css';const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-[#EDFDF2] ' >
      <Navbar/>

      {/* <SearchBar/> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* <Route path='/collection' element={<Collection/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/place-order' element={<PlaceOrder/>} />
        <Route path='/orders' element={<Orders/>} /> */}
        
      </Routes>
      {/* <Footer/> */}
    </div>
  )
}

export default App