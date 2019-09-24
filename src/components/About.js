import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from '../assets/profile.jpeg';
import bigIcon from '../assets/bigIcon.png';
import Title from './Title.js';

class About extends Component {
    /* constructor() {
        super();
        this.state = { displayBio: false };

        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    }

    toggleDisplayBio() {
        this.setState({ displayBio: !this.state.displayBio });
    } */

    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }


    render() {
        return (
            <div>
                <div className='section'>
                    <img src={profile} alt='profile' className='profile' />
                    <h1>Hello!</h1>
                    <p>My name is Ifat.</p>
                    <Title /> 
                    <p>I'm always looking forward to working on meaningful projects.</p>
                    {
                        this.state.displayBio ? (
                            <div>
                                <p>I live in Petah-Tiqwa, and code every day.</p>
                                <p>My favorite language is JavaScript, and I think React.js is awesome.</p>
                                <button className="btn btn-tour" onClick={this.toggleDisplayBio}>Show Less <i className="fa fa-angle-up"></i></button>
                                
                            </div>
                        ) : (
                            <div>
                            <button className="btn btn-tour" onClick={this.toggleDisplayBio}>Read More <i className="fa fa-angle-down"></i></button>
                            
                        </div> 
                        )
                    }
                </div>
            </div>
        )
    }
}

export default About;

/*
render() {
        return (
            <div>
                <div className='section—first bg'>
                    <img src={bigIcon} className='big-icon'/>
                </div>
                <div className='section'>
                    <img src={profile} alt='profile' className='profile' />
                    <h1>Hello!</h1>
                    <p>My name is Ifat.</p>
                    <Title /> 
                    <p>I'm always looking forward to working on meaningful projects.</p>
                    {
                        this.state.displayBio ? (
                            <div>
                                <p>I live in Petah-Tiqwa, and code every day.</p>
                                <p>My favorite language is JavaScript, and I think React.js is awesome.</p>
                                <button onClick={this.toggleDisplayBio}>Show Less</button>
                            </div>
                        ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read More</button>
                        </div> 
                        )
                    }
                    <SocialProfiles />
                </div>
            </div>
        )
*/