import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';

const Header = (props) =>{

    
    return (
        <div className="Header">
            <Link to="/">
                <img src={logo} alt="logo" className="Header-logo" 
                     onClick={props.handleClick}
                />
            </Link>
        </div>
    );

}

export default Header;