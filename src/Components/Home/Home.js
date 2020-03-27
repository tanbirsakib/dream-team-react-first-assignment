import React, { useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import Friend from '../Friend/Friend';
import './home.css';
import Cart from '../Cart/Cart';
const Home = () => {
    const first10=fakeData;
    
    const [friends, setFriends]= useState(first10);

    const[cart,setCart] = useState([]);
    const handleHirePlayer = (friend) => {
        console.log('player added',friend);
        const newCart = [...cart,friend];
        setCart(newCart);
    }
    
    return (
        <div className='home'>
        <div className="friend-container">
        {
            friends.map(friend => <Friend 
                handleHirePlayer={handleHirePlayer}
                friend = {friend}
                >
                
                </Friend>)
        }
        </div>
        <div className='cart container'>
        <Cart cart ={cart}></Cart>
        </div>
            
        </div>
    );
};

export default Home;