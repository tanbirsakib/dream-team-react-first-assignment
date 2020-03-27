import React from 'react';
import logo from '../../images/trust.png';
import logo2 from '../../images/header.png';
import './header.css';
const Header = () => {
    return (
        <div className='header'>
        <h2>Make Your Dream Team</h2>
           <img src={logo} alt=""/>
           <img src={logo2} alt=""/> 

        </div>
    );
};

export default Header;