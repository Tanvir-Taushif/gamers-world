import React from 'react';
const Cart = (props) =>{
    const {cartArray}=props;
    return (
        <div>
            <p>{cartArray}</p>
        </div>
    );
};

export default Cart;