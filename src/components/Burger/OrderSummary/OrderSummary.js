import React from 'react';

import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button'

const orderSummary = props =>{
	const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
		return(
			<li key =  {igKey}>
				<span> {igKey} </span>: {props.ingredients[igKey]}
			</li>
			);
	});
	return(
		<Auxiliary>
			<h3> Your Order </h3>
			<p> Your Burger includes:</p>
			<ul>
				{ingredientSummary}
			</ul>
			<p> <strong> Total Price : {props.price.toFixed(2)} </strong></p>
			<p> Continue to Checkout</p>
			<Button btnType = "Danger" clicked = {props.cancelProperty} > Cancel </Button>
			<Button btnType = "Success" clicked = {props.contiueProperty} > Continue </Button>
		</Auxiliary>
	);
};

export default orderSummary;