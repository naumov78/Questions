import React from 'react';
import { Link, withRouter } from 'react-router';
import UserMenu from './user/user-menu';


class Greeting extends React.Component  {
	constructor(props) {
		super(props);
		this.state = { visible: false }
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleMenuToggle = this.handleMenuToggle.bind(this);
	}

	handleMenuToggle(e) {
		e.preventDefault();
		this.setState(prevState => ({
			visible: !prevState.visible
		}));
	}


	handleSubmit(e) {
		e.preventDefault();
		this.props.logout().then(() => {
			this.props.router.push("/");
		})
	}

	redirectIfNotLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}


render() {
if(this.props.loggedIn){
		return (
			<div className="header-group">

					<button onClick={this.handleMenuToggle}>{this.props.currentUser.first_name}</button>

				<UserMenu visible={this.state.visible} currentUser={this.props.currentUser} logout={this.props.logout}/>
			</div>
			);
		} else {
			return (<div></div>);
		}
	}

}

export default withRouter(Greeting);


// value={`${this.props.currentUser.first_name}`}


// <form onSubmit={this.handleSubmit}>
// 	<input className="auth-form-btn" type="submit" value="Log out"/>
// </form>



// <h3 className="header-name"></h3>
