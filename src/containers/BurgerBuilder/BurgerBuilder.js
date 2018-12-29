import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';



const INGREDIENT_PRICE = {
    salad: 0.5,
    cheese: 0.8,
    meat: 1.3,
    bacon: 0.8
}


class BurgerBuilder extends Component {
    state = {
        ingredients : {
            salad : 0,
            cheese : 0,
            meat : 0,
            bacon : 0
        },
        totalPrice: 4

    }

    addIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        console.log(this.state.totalPrice);

    }

    removeIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }
        const updatedCount = oldCount -1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - INGREDIENT_PRICE[type];
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        console.log(this.state.totalPrice);
        
    }

    
    render () {
        const disableinfo ={
            ...this.state.ingredients
        }
        for (let key in disableinfo){
            disableinfo[key] = disableinfo[key] <= 0;
        }

        return (
            <>           
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientsAdded={this.addIngredientHandler} 
                    ingredientsRemoved={this.removeIngredientHandler}
                    disabled={disableinfo}/>
            </>
        );
    }
}

export default BurgerBuilder;