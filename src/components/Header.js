import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ children }) => {
    const style = {
        display: 'inline-block',
        margin: 10, 
        marginBottom: 30
    };

    return (
        <div>
            <div>
                <h3 style={style}><Link to='/'>Home</Link></h3>
                <h3 style={style}><Link to='/projects'>Projects</Link></h3>
                <h4 style={style}><Link to='/music-master'>Music Master</Link></h4>
                <h4 style={style}><Link to='/jokes'>Geeky Jokes</Link></h4>
            </div>
            {children}
        </div>
    )
}

export default Header;