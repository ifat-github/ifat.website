import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.jpeg'

class App extends Component {
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
                <img src={profile} alt='profile' className='profile' />
                <h1>Hello!</h1>
                <p>My name is Ifat. I'm a software developer.</p>
                <p>I'm always looking forward to working on meaningful projects.</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in Petah-Tiqwa, and code every day.</p>
                            <p>My favorite language is JavaScript, and I think React.js is awesome.</p>
                            <p>Besides coding, I also love music and pizza!</p>
                            <button onClick={this.toggleDisplayBio}>Show Less</button>
                        </div>
                    ) : (
                       <div>
                           <button onClick={this.toggleDisplayBio}>Read More</button>
                       </div> 
                    )
                }
                <hr />
                <Projects />
                <SocialProfiles />
            </div>
        )
    }
}

export default App;