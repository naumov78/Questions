import React from 'react';
import { Link } from 'react-router';

const Greeting = ({ currentUser, logout }) => (
	<hgroup className="header-group">
    <h3 className="header-name">Hi, {currentUser.first_name} {currentUser.last_name}!</h3>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

export default Greeting;
