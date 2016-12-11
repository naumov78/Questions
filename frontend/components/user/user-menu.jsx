import React from 'react';
import { withRouter } from 'react-router';

class UserMenu extends React.Component {
  constructor(props){
    super(props);

  }


  createDropDown() {
    // e.preventDefault();
    const menuItems = ['Profile', 'Edit User', 'Log out'];
    return (
      <ul id="user-profile-menu" className="vis-drop-down">
        {menuItems.map((item, i) => {
          if ( i === 0 ){
            return (<li key={`item-${i}`} id={`item-${i}`}>
              <button onClick={(e) => this.goToUserProfile(e)}>{item}</button></li>);
        } else if ( i === 1 ){
            return (<li key={`item-${i}`} id={`item-${i}`}>
              <button onClick={(e) => this.goToUserProfile(e)}>{item}</button></li>);
        } else {
          // debugger
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
      this.props.router.push(`/users/${this.props.currentUser.id}`);
    }
  }

  handleLogout(e) {
    this.props.logout().then(() => {
      this.props.router.push("/");
    })
  }




  render() {
    // debugger
    if (!this.props.visible) {
      return null;
    }

    return (<div>{this.createDropDown()}</div>)

  }


}

export default withRouter(UserMenu);







// toggleDropDown() {
//   if ($('#user-profile-menu').hasClass('invis-drop-down')) {
//     $('.invis-drop-down').removeClass().addClass('vis-drop-down');
//   } else {
//     $('.vis-drop-down').removeClass().addClass('invis-drop-down');
//   }
// }
