import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

const SocialProfile = (props) => {
        const { icon, link } = props.social;

        return (
            <span>
                <a href={link}>
                    <img src={icon} alt='social-profile' style={{ width: 35, height: 35, margin: 10 }}/>
                </a>
            </span>
        )
}

const SocialProfiles = () => (
    <div>
        <h2>Connect with me!</h2>
        <div>
            {
                SOCIAL_PROFILES.map(SOCIAL => (
                        <SocialProfile key={SOCIAL.id} social={SOCIAL} />
                    )
                )
            }
        </div>
    </div>
)

export default SocialProfiles;