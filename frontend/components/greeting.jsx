import React from 'react';
import { Link, withRouter } from 'react-router';


class Greeting extends React.Component  {
	constructor(props) {
		super(props);
		this.state = { dropDownMenu: false }
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleMenuToggle = this.handleMenuToggle.bind(this);
	}

	createDropDown() {
		return (
	  	<div id="myDropdown" className="dropdown-content">
	    	<a onClick={(e) => this.setState( {dropDownMenu: false}, this.goToUserProfile(e)) }>Profile</a>
	    	<a onClick={(e) => this.handleLogout(e)}>Logout</a>
	  	</div>
		);
	}

	renderDropDown() {
		document.getElementById("myDropdown").classList.toggle("show");
}

  goToUserProfile(e) {
    e.preventDefault();
    if (this.props.location.pathname !== `/users/${this.props.currentUser.id}`) {
      this.props.router.push(`/users/${this.props.currentUser.id}`)
    }
  }

  handleLogout(e) {
    this.props.logout().then(() => {
			debugger
			this.props.router.push("/login")
		})
  }

	handleMenuToggle(e) {
		e.preventDefault();
		this.setState(prevState => ({
			dropDownMenu: !prevState.dropDownMenu
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

	formatName() {
		let name = this.props.currentUser.first_name;
		if (name.length > 6) {
			name = name.slice(0, 3) + "...";
		}
		return name;
	}

	render() {
		if(this.props.loggedIn){
			return (
				<div className="dropdown">
						<a className="drop-btn" onClick={this.renderDropDown}>{this.formatName()}</a>
							<div id="myDropdown" className="dropdown-content">
					    	<a onClick={(e) => this.setState( {dropDownMenu: false}, this.goToUserProfile(e)) }>Profile&nbsp;</a>
								<a onClick={(e) => this.handleLogout(e)}>Logout</a>
					  	</div>
				</div>
				);
		}
			return (<div></div>);
	}

}

export default withRouter(Greeting);
