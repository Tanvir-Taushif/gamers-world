import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);
    return (
        <div className=' container '>
          <div className="row g-2">
           {
                products.map(product=><Product key={product.id}
                product={product}></Product>)
            }
          </div>
      </div>
    );
};

export default Shop;