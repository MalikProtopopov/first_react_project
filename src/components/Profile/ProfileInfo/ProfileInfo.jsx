import React from "react";
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return  (
        <div className={classes.content}>
        <div>
            <img className={classes.contentImage} alt='' src='https://kartinkin.net/uploads/posts/2020-07/1593813358_33-p-fon-matritsa-45.png'/>
        </div>
        <div className={classes.description}>
            <img className={classes.avatar}  alt='' src='https://i.pinimg.com/originals/30/96/85/309685f2f0200b7431c20f1cb711360e.jpg'></img>
            <div>
                <p>Протопопов Малик</p>
                <p>11.04.2000</p>
            </div>
        </div>

    </div>
    )
}

export default ProfileInfo