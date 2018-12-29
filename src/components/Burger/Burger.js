import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ( props ) => {
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {            
        return [...Array(props.ingredients[igKey])].map(( _, index ) => {        // [...Array(2)] or [ , ].map
            return <BurgerIngredient key ={igKey + index} type={igKey} />  
            // pass key=salad1 type=salad, and key=salsd2 type=salad
        });    
    }).reduce((arr, el) => {
        return arr.concat(el)
    },[]);

    if (transformedIngredients.length === 0){
        transformedIngredients = <p>Start adding some ingredients!</p>
    }
    
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    );
}

export default burger;