import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
	{label : 'Salad', type : 'salad'},
	{label : 'Meat', type : 'meat'},
	{label : 'Cheese', type : 'cheese'},
	{label : 'Bacon', type : 'bacon'}
];

const buildControls = (props) => (
	<div className = {classes.BuildControls}>
		<p> Current Price :  <strong>{props.totalPrice.toFixed(2)}</strong></p>
		{controls.map(cntrl =>(
			<BuildControl key = {cntrl.label} label = {cntrl.label} 
			added = {() => props.ingredientAdd(cntrl.type)}
			remove = {() => props.ingredientRemove(cntrl.type)}
			disable = {props.disable[cntrl.type]}/>
			))}
		<button className = {classes.OrderButton}
		disabled = {!props.purchasable} 
		onClick = {props.ordered}> Buy Now</button>
	</div>
);

export default buildControls;