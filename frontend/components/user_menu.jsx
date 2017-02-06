import React from 'react';
import { Link, withRouter } from 'react-router';


class UserMenu extends React.Component  {
	constructor(props) {
		super(props);
	}


  goToUserProfile(e) {
    e.preventDefault();
    if (this.props.location.pathname !== `/users/${this.props.currentUser.id}`) {
      this.props.router.push(`/users/${this.props.currentUser.id}`)
    }
  }

  handleLogout(e) {
    this.props.logout().then(() => this.props.router.push(`/login`));
  }

  render() {
      return (
        <div id="userDropdown" className="dropdown-content">
          <a onClick={(e) => this.goToUserProfile(e)}>Profile&nbsp;</a>
          <a onClick={(e) => this.handleLogout(e)}>Logout</a>
        </div>
        );
  }

}




export default withRouter(UserMenu);
