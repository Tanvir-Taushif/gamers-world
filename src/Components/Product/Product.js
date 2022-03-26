import React from 'react';
import './Product.css';
import Cart from '../Cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const{product,handleAddToCart}=props;
    const{id,name,img,price}=product;
    return (
        <div className="col-12 col-md-4">
            <div className='prod text-center'>
                <img src={img} className='img-fluid' alt="" />
                <h4>{name}</h4>
                <p>Price:${price}</p>
                <button onClick={()=>handleAddToCart(name)} className=' btn w-100'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
            </div>
        </div>
    );
};

export default Product;