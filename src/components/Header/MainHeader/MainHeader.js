import React from 'react';
import { Link } from 'react-router-dom';
import './MainHeader.css'
const MainHeader = () => {
    return (
        <div className='navbar'>
            <div>
                <img src='https://www.themealdb.com/images/logo-small.png' alt=''></img>
            </div>
            <div className='navLinks'>
            <Link className='home' to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/login'>Login</Link>
            </div>
        </div>
    );
};

export default MainHeader;