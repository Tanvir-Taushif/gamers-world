import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([]);
    const [select,setSelect]=useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);

    const addToCart=product=>{
        if(!cart.includes(product)){
            const newCart=[...cart,product];
            setCart(newCart);
        }
    }
    const chooseOne=()=>{
        const index=Math.floor(Math.random()*cart.length);
        const newSelect=[cart[index]];
        setSelect(newSelect);
    }
    const chooseAgain=()=>{
        setCart([]);
        setSelect([]);
    }
    return (
        <div className="container mb-5">
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
              <div id='cart' className='container my-5'>
                  <Cart cart={cart} chooseOne={chooseOne} chooseAgain={chooseAgain} select={select}></Cart>
              </div>
            </div>
          </div>
        </div>

    );
};

export default Shop;