'use client'
import { removeCart } from '@/Redux/features/cartSlice';
import { RootState } from '../../Redux/store';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function page() {

    const Dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.value)

    const handleremove = (id: number) => {
      console.log(id);
      Dispatch(removeCart(id))
    }

  return (
    <div> 
        <h3 className='text-center'>My Orders</h3>
        {/* cartItems ?  */}
        <div className='cartWrapper '>
            {
                cartItems.map((item)=>(
                    <div className='d-md-flex text-center justify-content-evenly gap-2 shadow p-3 mb-5 bg-body rounded'>
                        <img className='w-25 ' style={{height: "200px"}} src={item.image} alt='img'/>
                        <h5 className='my-auto'>{item.title}</h5>
                        <h5 className='my-auto'>{item.price}</h5>
                        <button className=' my-auto btn btn-danger' onClick={()=> handleremove(item.id)} >Remove</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default page