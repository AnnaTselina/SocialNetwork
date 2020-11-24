import React from 'react';
import pi from "./ProfileInfo.module.css"


const ProfileInfo  = () => {
    return (
        <div>      
            <div>
                <img src ='https://www.telegraph.co.uk/content/dam/Travel/Destinations/Africa/Mauritius/Mauritius---Beaches---Tropical-beach-small.jpg'></img>
            </div>
            <div className={pi.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;