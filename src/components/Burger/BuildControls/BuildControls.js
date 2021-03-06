import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
const controls = [
    {label : 'Salad', type : 'salad'},
    {label : 'Cheese', type : 'cheese'},
    {label : 'Meat', type : 'meat'},
    {label : 'Bacon', type : 'bacon'}
];


const buildControls = ( props ) => {
    return <div className={classes.BuildControls}>
        <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => {
            return <BuildControl 
                        key={ctrl.type} 
                        label={ctrl.label}
                        added={()=>props.ingredientsAdded(ctrl.type)} 
                        removed={()=> props.ingredientsRemoved(ctrl.type)}
                        disabled={props.disabled[ctrl.type]}/>
        })}
        <button 
            className={classes.OrderButton}
            disabled={!props.purchaseable}
            onClick={props.ordered}
        >ORDER NOW</button>
    </div>
}

export default buildControls;