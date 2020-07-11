import React from 'react';

import logoSource from '../../assets/images/logo.png';
import classes from './Logo.css';

const logo = (props) => (
	<div className = {classes.Logo}> 
		<img className = {classes.img} src = {logoSource} alt = "The best burger"/>
	</div>
	);

export default logo;