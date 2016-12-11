import React from 'react';
import { Link, withRouter } from 'react-router';


// <button onClick={(e) => this.goToUserProfile(e).then(() => this.handleMenuToggle())}>

class Greeting extends React.Component  {
	constructor(props) {
		super(props);
		this.state = { dropDownMenu: false }
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleMenuToggle = this.handleMenuToggle.bind(this);
	}


  createDropDown() {
      // e.preventDefault();
      const menuItems = ['Profile', 'Log out'];
      return (
        <ul id="user-profile-menu" className="vis-drop-down">
          {menuItems.map((item, i) => {
            if ( i === 0 ){
              return (
                <li key={`item-${i}`} id={`item-${i}`}>
                <button onClick={(e) => this.handleMenuToggle(e).then(() => this.goToUserProfile())}>
                  {item}
                </button>
                </li>);
          } else {
              return (<li key={`item-${i}`} id={`item-${i}`}>
                <button onClick={(e) => this.handleLogout(e)}>{item}</button></li>);
          }
        })}
        </ul>
      );
    }

    goToUserProfile(e) {
      e.preventDefault();
      if (this.props.location.pathname !== `/users/${this.props.currentUser.id}`) {
        this.props.router.push(`/users/${this.props.currentUser.id}`)
      }
    }

    handleLogout(e) {
      this.props.logout().then(() => this.props.router.push("/login"))
    }

	handleMenuToggle(e) {
		e.preventDefault();
		return this.setState(prevState => ({
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


render() {
  // debugger
if(this.props.loggedIn){
  if(!this.state.dropDownMenu){
		return (
			<div className="header-group">
					<button onClick={this.handleMenuToggle}>{this.props.currentUser.first_name}</button>
			</div>
			);
  }
    return (
      <div className="header-group">
					<button onClick={this.handleMenuToggle}>{this.props.currentUser.first_name}</button>
          {this.createDropDown()}
			</div>
      );
}
	return (<div></div>);
}

}

export default withRouter(Greeting);



// value={`${this.props.currentUser.first_name}`}


// <form onSubmit={this.handleSubmit}>
// 	<input className="auth-form-btn" type="submit" value="Log out"/>
// </form>



// <h3 className="header-name"></h3>
