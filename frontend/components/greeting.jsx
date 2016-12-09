import React from 'react';
import { Link, withRouter } from 'react-router';


class Greeting extends React.Component  {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
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
		return ( <hgroup className="header-group">
			    <h3 className="header-name">Hi, {this.props.currentUser.first_name} {this.props.currentUser.last_name}!</h3>
			    <form onSubmit={this.handleSubmit}>
						<input className="auth-form-btn" type="submit" value="Log out"/>
					</form>
				</hgroup>
			);
		} else {
			return (<div></div>);
		}
	}

}

export default withRouter(Greeting);
