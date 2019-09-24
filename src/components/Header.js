import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = ({ children }) => {
    return (
        <div>
            <div className='header'>
                <h3 className='headerH'><NavLink exact to='/'>Home</NavLink></h3>
                <h3 className='headerH'><NavLink to='/projects'>Projects on Git</NavLink></h3>
                <h4 className='headerH'><NavLink to='/music-master'>Music Master</NavLink></h4>
                <h4 className='headerH'><NavLink to='/jokes'>Geeky Jokes</NavLink></h4>
            </div>
            <div className='header-children'>
                {children}
            </div>
        </div>
    )
}

export default Header;