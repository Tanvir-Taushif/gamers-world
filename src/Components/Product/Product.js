import React from 'react';
import './Product.css';
import Cart from '../Cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const{product,handleAddToCart}=props;
    const{id,name,img,price}=product;
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className='prod text-center'>
                <img src={img} className='img-fluid' alt="" />
                <h5 className='mt-2 fw-bold'>{name}</h5>
                <p className='fw-bold'>Price:${price}</p>
                <button onClick={()=>handleAddToCart(name)} className=' btn w-100'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
            </div>
        </div>
    );
};

export default Product;