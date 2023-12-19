"use client";
import { RootState } from '../Redux/store';
import Link from 'next/link';
import React from 'react'
import { useSelector } from 'react-redux';

const Navbar = () => {

    const cartItems = useSelector((state:RootState) => state.cart.value)

  return (
    <div className='d-flex text-center justify-content-between mx-5' >
         <span>Order-Shop</span>
         <div>
            <Link className='navLink mx-3' href={"/"}>Home</Link>
            <Link className='navLink mx-2' href={"/cart"}>Cart</Link>
            <span style={{fontWeight:"bolder"}}>items:{cartItems.length}</span>
         </div> 
    </div>
  )
}

export default Navbar