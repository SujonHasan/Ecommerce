'use client'
import { useEffect, useState } from 'react';
import styles from './page.module.css'
import { useDispatch } from 'react-redux';
import { addCart } from '@/Redux/features/cartSlice';

export default function Home() {

  const disPatch = useDispatch();
  const [products, setProducts] = useState([])
  const getProduct = async () => {
    const result = await fetch('https://fakestoreapi.com/products');
    const data = await result.json();
    setProducts(data);
  }

  useEffect(() => {
    getProduct();
  }, [])

  return (
    <main className={styles.main}>
      <h1 className='text-primary' >Welcome E-commerce</h1>
      <div className='row text-center'>
        {products.map((product) => {
          return <>
            <div key={product.id} className="card p-3 col-lg-4 col-md-6 col-12">
              <img style={{height:"300px"}} src={product.image} className="card-img-top" alt="cartImage" />
              <div className="card-body">
                <h4 className='card-title' >{product.title}</h4> 
                <h5 className='cart-text bold' > Price: {product.price}</h5>
                <button onClick={()=> {
                  disPatch(addCart(product))  
                }} className='btn btn-secondary mx-auto'>Add to cart</button> 
              </div>
            </div>
          </>
        })}
      </div>
    </main>
  )
}
