import React, { Component } from 'react';

import Button from '../../UI/Button/Button';

class OrderSummary extends Component{
    componentWillUpdate () {
        console.log('[OrderSummary] WillUpdate')
    }
    
    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map( igKey => {
            return <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span>
                        : {this.props.ingredients[igKey]}
                    </li>
        });

        return (
            <>
                <h3>Your Order</h3>
                <p>Your delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: </strong>{this.props.price.toFixed(2)}</p>
                <p>Continue to Checkout?</p>
                <Button clicked={this.props.purchaseCanceled} btnType="Danger">CANCEL</Button>
                <Button clicked={this.props.purchaseContinue} btnType="Success">CONTINUE</Button>
            </>
        );
    }
}


      
        



export default OrderSummary;