import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

const SocialProfile = (props) => {
    const { icon, link } = props.social;

    return (
        <span>
            <a href={link} target="_blank">
                <img src={icon} alt='social-profile' style={{ width: 35, height: 35, margin: 10 }} />
            </a>
        </span>
    )
}

const SocialProfiles = () => (
    <div>
        {
            SOCIAL_PROFILES.map(SOCIAL => (
                <SocialProfile key={SOCIAL.id} social={SOCIAL} />
            )
            )
        }
    </div>
)

export default SocialProfiles;