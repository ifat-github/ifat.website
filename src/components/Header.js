import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = ({ children }) => {
    const style = {
        display: 'inline-block',
        margin: 10, 
        marginBottom: 30
    };

    return (
        <div>
            <div>
                <h3 style={style}><NavLink exact to='/'>Home</NavLink></h3>
                <h3 style={style}><NavLink to='/projects'>Projects</NavLink></h3>
                <h4 style={style}><NavLink to='/music-master'>Music Master</NavLink></h4>
                <h4 style={style}><NavLink to='/jokes'>Geeky Jokes</NavLink></h4>
            </div>
            {children}
        </div>
    )
}

export default Header;