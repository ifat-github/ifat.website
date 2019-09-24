import React, { Component } from 'react';
import bigIcon from '../assets/bigIcon.png';

class Icon extends Component {
    render() {
        return (
            <div className='section—first bg'>
                <img src={bigIcon} className='big-icon'/>
            </div>
        )
    }
}

export default Icon;