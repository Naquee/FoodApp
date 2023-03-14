import { Modal } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './Cart'
import Checkout from './Checkout'
import Home from './Home'
import Menu from './Menu'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/menu' element={<Menu/>}/>
          
       
            

        </Routes>
    </div>
  )
}

export default AllRoutes