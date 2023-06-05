import React from 'react';
import classes from './Icon.module.css';


function Icon({ picture }) {
    return (
        <img
            className={classes.icon}
            src={require(`../../../assets/${picture}`)}
            alt="?"
        />
    );
}


export default Icon;