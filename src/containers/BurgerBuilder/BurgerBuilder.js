import React, {Component} from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';

const INGREDIENT_PRICES = {
	salad:0.5,
	cheese:0.4,
	bacon:0.5,
	meat:1.2
}

class BurgerBuilder extends Component {

	state ={
		Ingredients :{
			salad:0,
			bacon: 0,
			cheese: 0,
			meat: 0
		},
		totalPrice : 5,
		purchasable : false,
		buyCLicked : false
	};

	updatePurchasable(ingredients){
		const sum = Object.keys(ingredients).map((igKey) => {
			return ingredients[igKey];
			}).reduce((sum,el) => {
				return sum + el;
				}, 0);
		let purchasable = sum > 0;
		// console.log('updatePurchasable' , purchasable);
		this.setState({purchasable : purchasable}); 
	}

	buyHandler = () =>{
		this.setState({buyCLicked : true});
	}

	buyCancelHandler = () =>{
		this.setState({buyCLicked : false});
	}

	buyContinueHandler = () =>{
		console.log('continuing');
	}

	addIngredientHandler = (type) => {
		// console.log('[Burger.js]' , this.state.Ingredients);

		const oldCount = this.state.Ingredients[type];
		const updadatedCount = oldCount +1;
		const updatedIngredients = {
			...this.state.Ingredients
		};
		updatedIngredients[type] = updadatedCount;
		const price = INGREDIENT_PRICES[type];
		const newTotalPrice = this.state.totalPrice + price;

		this.setState({Ingredients: updatedIngredients,  totalPrice:newTotalPrice});
		this.updatePurchasable(updatedIngredients);
	}

	removeIngredientHandler = (type) => {
				// console.log('[Burger.js]' , this.state.Ingredients);

		const oldCount = this.state.Ingredients[type];
		if(oldCount <= 0)
			return;
		const updadatedCount = oldCount - 1;
		const updatedIngredients = {
			...this.state.Ingredients
		};
		updatedIngredients[type] = updadatedCount;
		const price = INGREDIENT_PRICES[type];
		const newTotalPrice = this.state.totalPrice - price;

		this.setState({Ingredients: updatedIngredients,  totalPrice:newTotalPrice});
		this.updatePurchasable(updatedIngredients);
	}


		
	render(){
		const disableKeys ={
			...this.state.Ingredients
		};

		for(let key in disableKeys){
			disableKeys[key] = disableKeys[key] <= 0;
		}

		return(
			<Auxiliary>
				<Modal show = {this.state.buyCLicked}
					closeModal = {this.buyCancelHandler}>
					<OrderSummary 
					price = {this.state.totalPrice}
					ingredients = {this.state.Ingredients}
					cancelProperty = {this.buyCancelHandler}
					contiueProperty = {this.buyContinueHandler} />
				</Modal>
				<Burger ingredients = {this.state.Ingredients}/>
				<BuildControls 
				 ingredientAdd = {this.addIngredientHandler}
				 ingredientRemove = {this.removeIngredientHandler}
				 disable = {disableKeys}
				 totalPrice = {this.state.totalPrice}
				 purchasable = {this.state.purchasable}
				 ordered = {this.buyHandler}
				 />
			</Auxiliary>
		);
	}
}

export default BurgerBuilder;