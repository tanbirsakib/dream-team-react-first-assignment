import React from 'react';
import './cart.css';
import logo from '../../images/football-player (1).png'

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const playerPrice = cart[i];
        total = total+ playerPrice.salary;
           }
    return (
        <div className='cart-info'>
        <img src={logo} alt=""/>
            <h3>Player Hired:{props.cart.length}</h3>
            <p>Total Paid : ${total}</p>    
        </div>
    );
};

export default Cart;