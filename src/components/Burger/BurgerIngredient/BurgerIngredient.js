import React from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.css';
const burgerIngredient = (props) => {
	let indgredient = null;

	switch(props.type){
		case ('bread-bottom'):
			indgredient = <div className = {classes.BreadBottom}></div>
			break;
		case ('bread-top'):
			indgredient = (
			<div className = {classes.BreadTop}>
				<div className = {classes.Seeds1}></div>
				<div className = {classes.Seeds2}></div>
			</div>
			);
			break;
		case ('meat'):
			indgredient = <div className = {classes.Meat}></div>
			break;
		case ('cheese'):
			indgredient = <div className = {classes.Cheese}></div>
			break;
		case ('bacon'):
			indgredient = <div className = {classes.Bacon}></div>
			break;
		case ('salad'):
			indgredient = <div className = {classes.Salad}></div>
			break;
		default:
			indgredient = null;

	}

	return indgredient;
};

burgerIngredient.propTypes = {
	type: PropTypes.string.isRequired
};
export default burgerIngredient;