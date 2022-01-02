import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from '../assets/profile.jpeg';
import bigIcon from '../assets/bigIcon.png';
import Title from './Title.js';

class CV extends Component {
    /* constructor() {
        super();
        this.state = { displayBio: false };

        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    }

    toggleDisplayBio() {
        this.setState({ displayBio: !this.state.displayBio });
    } */

    state = { displayCV: false };

    toggleDisplayCV = () => {
        this.setState({ displayCV: !this.state.displayCV });
    }

    showCV = () => {
        var elmnt = document.getElementById("cv-toggle");
        const coordinate = elmnt.getBoundingClientRect().top + window.pageYOffset;
        const offset = -50;

        window.scrollTo({
            top: coordinate + offset,
            behavior: 'smooth'
        });
    }

    hideCV = () => {
        console.log("hide CV pressed");
        var elmnt = document.getElementById("ABOUT");
        elmnt.scrollIntoView({ behavior: "smooth" });
    }

    render() {
        return (
            <div>
                <div className='section'>
                    {
                        this.state.displayCV ? (
                            <div>
                                {/* CV */ }
                                <div className="cv">
                                    <div className="container">
                                        <div className="col-md-12">
                                            <div id="cv" className="instaFade">
                                                <div className="mainDetails">
                                                    <div id="headshot" className="quickFade">
                                                        <img src={ profile } alt="Ifat Ori" />
                                                    </div>

                                                    <div id="name">
                                                        <h1 className="quickFade delayTwo">Ifat Bergman</h1>
                                                        <h2 className="quickFade delayThree">Software Developer</h2>
                                                    </div>

                                                    <div id="contactDetails" className="quickFade delayFour">
                                                        <ul>
                                                            <li>e: <a href="mailto:ifat.email@gmail.com" target="_blank">ifat.email@gmail.com</a></li>
                                                            <li>w: <a href="http://ifat.website">ifat.website</a></li>
                                                            <li>m: 054-5968534</li>
                                                        </ul>
                                                    </div>
                                                    <div className="clear"></div>
                                                </div>

                                                <div id="mainArea" className="quickFade delayFive">
                                                    {/* Work Experience */ }
                                                    <section>
                                                        <div className="sectionTitle">
                                                            <h1>Professional Experience</h1>
                                                        </div>
                                                        <div className="sectionContent">
                                                            <article>
                                                                <h2>Python Developer at Webz.io</h2>
                                                                <p className="subDetails">2019 - 2022</p>
                                                                <p>Gaining a significant experience with crawler development, database architecture and a solid understanding of data processing using Python
                                                                    Writing “clean,” well-designed code, following industry best practices
                                                                    Troubleshooting, testing and maintaining the core product software and databases to ensure strong optimization and functionality
                                                                    Developing and improving the crawling platform
                                                                    Contributing in all phases of the development lifecycle
                    </p>
                                                            </article>
                                                            <article>
                                                                <h2>Java Developer at Infinity Labs R&D (Matrix)</h2>
                                                                <p className="subDetails">2019</p>
                                                                <p>Participated In a 6-months intense full-time & open lab training environment that covered a full
                                                                  range of development tools, technologies, and techniques.
                                                                  Have gained a total of over 1,200 coding hours.
                                                                  Programmed with a focus on C & Java: solved implementation challenges using wide concepts such as
                                                                  Data Structures, Design Patterns, OOP, Generic Programming, multi-threaded environments.
                                                                  Deep understanding of Linux OS and its tools (e.g Bash).
                                                                  Familiarity with Server-side tools: MySQL, Apache Tomcat, JUnit & Networking concepts (e.g REST).
                    </p>
                                                            </article>
                                                            <article>
                                                                <h2>Marketing Automation Specialist at eToro</h2>
                                                                <p className="subDetails">July 2016 - August 2018</p>
                                                                <p>Created emails with HTML, CSS
                                                                  Managed and modified an automated PHP system
                                                                  Found solutions for optimizing and improving internal processes
                                                                  Improved click, open, and conversion rates by tracking, analyzing, and AB testing campaigns.
                                                                  Conceptualized, built, and launched email campaigns
                      Defined segmentation and personalization for each campaign. </p>
                                                            </article>
                                                        </div>
                                                        <div className="clear"></div>
                                                    </section>
                                                    {/* Education */ }
                                                    <section>
                                                        <div className="sectionTitle">
                                                            <h1>Education</h1>
                                                        </div>

                                                        <div className="sectionContent">
                                                            <article>
                                                                <h2>Shenkar College</h2>
                                                                <p className="subDetails">2012-2016 </p>
                                                                <p>B.sc degree in Industrial Engineering, focus on Information Systems</p>
                                                            </article>
                                                            <article>
                                                                <h2>Udacity</h2>
                                                                <p className="subDetails">2020 </p>
                                                                <p>The Fullstack Nano Degree - SQL and Data Modeling for the Web using Python, API Development and Documentation, authentication and authorization using Flask, Docker containers and deployment to a Kubernetes cluster using AWS.</p>
                                                            </article>
                                                            <article>
                                                                <p>Working on a project using Flask and ReactJS.</p>
                                                            </article>
                                                        </div>
                                                        <div className="clear"></div>
                                                    </section>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-default submit-btn reg-button" onClick={ (event) => { this.toggleDisplayCV(); this.hideCV(); } }>Hide CV</button>
                            </div>
                        ) : (
                                <div>
                                    <button className="btn btn-default submit-btn reg-button" onClick={ (event) => { this.toggleDisplayCV(); this.showCV(); } }>Show CV </button>
                                </div>
                            )
                    }
                </div>
            </div>
        )
    }
}

export default CV;

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
