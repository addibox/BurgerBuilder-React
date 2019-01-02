import React from 'react';

import LogoBurger from '../../assests/images/burger-logo.png';
import classes from './Logo.module.css';

const logo = ( props ) => (
    <div className={classes.Logo} style={{height: props.height, margin: props.margin}}>
        <img src={LogoBurger} alt="Burger Logo"/>
    </div>
);

export default logo;