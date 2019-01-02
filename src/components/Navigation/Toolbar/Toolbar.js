import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigatiomItems from '../../NavigationItems/NavigationItems';

const toolbar = ( props ) => (
    <header className={classes.Toolbar}>
        <div>Menu</div>
        <Logo />
        <NavigatiomItems />
    </header>
);

export default toolbar;