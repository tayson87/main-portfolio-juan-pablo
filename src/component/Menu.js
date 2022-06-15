import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
           
            <label htmlFor='menu' className='ham-menu'>            
                <span className='br-1'></span>
                <span className='br-2'></span>
                <span className='br-3'></span>             
            </label>
            <input type="checkbox" id='menu' className='nav_input' />

            <div  className= 'nav_menu'>
                <Link to='/' className='nav_item'> Home </Link> 
                 <Link to='/Aboutme' className='nav_item'> About me </Link> 
                <Link to ='/Proyect' className='nav_item'> Proyect </Link> 
            </div>
        </div>
    );
};

export default Menu;