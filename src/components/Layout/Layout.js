import React, {Component} from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import classes from './Layout.css';

class Layout extends Component {

	state = {
		showSideDrawer : false
	}

	SideDrawerCloseHandler = () => {
		this.setState({showSideDrawer : false});
	}

	SideDrawerShowHandler = () => {
		this.setState({showSideDrawer : true});
	}

	render (){
		return(<Auxiliary>
			<Toolbar toggleSideDrawer = {this.SideDrawerShowHandler}/>
			<SideDrawer open = {this.state.showSideDrawer} closed = {this.SideDrawerCloseHandler} />
			<main className = {classes.Content}> 
				{this.props.children}
			</main>
		</Auxiliary>
		);
	}
}

export default Layout;