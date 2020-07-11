import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

	let burgerIngredients = Object.keys(props.ingredients).map((igKey) => {
		return [...Array(props.ingredients[igKey])].map((_, i) =>{
			return <BurgerIngredient type = {igKey} key = {igKey + i}/>
		});
	}).reduce((arr,el) => {
		return arr.concat(el)
	}, []		);

	if(burgerIngredients.length === 0){
		burgerIngredients = <p> Please add the ingredients!</p>
	}
	return(
		<div className = {classes.Burger}>
			<BurgerIngredient type = 'bread-top'/>
			{burgerIngredients}
			<BurgerIngredient type = 'bread-bottom'/>
		</div>
	);
};

export default burger;