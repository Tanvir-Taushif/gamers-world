import React from 'react';
import './Cart.css'
const Cart = (props) =>{
    const {cart,chooseOne,chooseAgain,select}=props;
    return (
        <div id='cart-box' className='text-center'>
            <h1>Cart</h1>
                  {
                      cart.map(product=><p className='fw-bold'>{product}</p>)
                  }
                  <button className='cart-btn' onClick={chooseOne}>Choose One for Me</button><br /><br />
                  {
                      select.map(product=><p id='select-prod' className='fw-bold'>{product}</p>)
                  }
                  <button className='cart-btn' onClick={chooseAgain}>Choose Again</button>
        </div>
    );
};

export default Cart;