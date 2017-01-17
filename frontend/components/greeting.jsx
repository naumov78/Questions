import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router';
import UserMenuContainer from './user_menu_container';


class Greeting extends React.Component  {
	constructor(props) {
		super(props);
		this.state = { showMenu: false }
    this.hide = this.hide.bind(this);
	}

  hide(e){
    if (!ReactDOM.findDOMNode(this).contains(e.target)) {
      if (this.state.showMenu) {
        this.setState({showMenu: false})
      }
    }
  }

  addHideListener() {
    window.addEventListener('click', this.hide);
  }

  removeHideListener() {
    window.removeEventListener('click', this.hide);
  }

  handleMenuToggle(e) {
		e.preventDefault();
		this.setState(prevState => ({
			showMenu: !prevState.showMenu
		}));
	}

	redirectIfNotLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	formatName() {
		let name = this.props.currentUser.first_name;
		if (name.length > 14) {
			name = name.slice(0, 12) + "...";
		}
		return name;
	}

	render() {
    let dropmenu = this.state.showMenu ? <UserMenuContainer /> : null;
    this.state.showMenu ? this.addHideListener() : this.removeHideListener();
		if(this.props.loggedIn){
			return (
				<div className="dropdown-wrapper">
          <a className="drop-btn" onClick={e => this.handleMenuToggle(e)}>
					<div className="dropdown">
							<span className="header-userpic"><img src={this.props.currentUser.userpic_url} /></span>
              <span className="header-username">{this.formatName()}</span>
              {dropmenu}
					</div>
          </a>
				</div>
				);
		}
			return (<div></div>);
	}

}

export default withRouter(Greeting);
