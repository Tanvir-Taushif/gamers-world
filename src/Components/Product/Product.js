import React from 'react';
import './Product.css';

const Product = (props) => {
    const{id,name,img,price}=props.product;
    return (
        <div className="col-12 col-md-4">
            <div className='prod'>
                <img src={img} className='img-fluid' alt="" />
                <h3>{name}</h3>
                <h4>Price:${price}</h4>
                <button className='button'>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;