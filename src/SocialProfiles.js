import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

class SocialProfile extends Component {
    render() {
        const { icon, link } = this.props.social;

        return (
            <span>
                <a href={link}>
                    <img src={icon} alt='social-profile' style={{ width: 35, height: 35, margin: 10 }}/>
                </a>
            </span>
        )
    }
}


class SocialProfiles extends Component {
    render() {
        return (
            <div>
                <h2>Connect with me!</h2>
                <div>
                    {
                        SOCIAL_PROFILES.map(SOCIAL => {
                            return (
                                <SocialProfile key={SOCIAL.id} social={SOCIAL} />
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SocialProfiles;