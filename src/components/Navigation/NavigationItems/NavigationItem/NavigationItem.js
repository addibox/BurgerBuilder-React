import React from 'react';

import classes from './NavigatiomItem.module.css';

const navigationItem = (props) => (
    <li className={classes.NavigatiomItem}>
        <a href={props.link} 
           className={ props.active ? classes.active : null}>{props.children}</a>
    </li>
   
);

export default navigationItem;