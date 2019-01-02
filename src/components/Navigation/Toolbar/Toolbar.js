import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigatiomItems from '../NavigationItems/NavigationItems';

const toolbar = ( props ) => (
    <header className={classes.Toolbar}>
        <div>Menu</div>
        <Logo height="80%"/>
        <nav className={classes.DesktopOnly}>
            <NavigatiomItems />
        </nav>
        
    </header>
);

export default toolbar;