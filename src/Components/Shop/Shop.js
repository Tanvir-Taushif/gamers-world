import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);

    const addToCart=product=>{
        const newCart=[...cart,product];
        setCart(newCart);
    }
    return (
        <div className="container">
          <div className="row">
            <div className=" col-md-9 col-12 ">
                <div className=' container my-5'>
                    <div className="row g-3">
                       {
                            products.map(product=><Product key={product.id}
                            product={product} handleAddToCart={addToCart}></Product>)
                        }
                    </div>
                </div>
            </div>
            <div className=" col-md-3 col-12 ">
              <div className='container'>
                  <h1>Cart</h1>
                  {
                      cart.map(product=><p>{product}</p>)
                  }
              </div>
            </div>
          </div>
        </div>

    );
};

export default Shop;