import React from 'react';
import { Link, withRouter } from 'react-router';



class Greeting extends React.Component  {
	constructor(props) {
		super(props);
		this.state = { dropDownMenu: false }
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleMenuToggle = this.handleMenuToggle.bind(this);
	}

  // createDropDown_old() {
  //   const menuItems = ['Profile', 'Log out'];
  //   return (
	// 		<div className="user-profile-menu">
	//       <ul id="user-profile-menu" className="vis-drop-down">
	//         {menuItems.map((item, i) => {
	//           if ( i === 0 ){
	//             return (
	//               <li key={`item-${i}`} id={`item-${i}`}>
	//               <a onClick={(e) => this.setState( {dropDownMenu: false}, this.goToUserProfile(e)) }>
	//                 {item}
	//               </a>
	//               </li>);
	//         } else {
	//             return (
	// 							<li key={`item-${i}`} id={`item-${i}`}>
	//               <a onClick={(e) => this.handleLogout(e)}>
	// 								{item}
	// 							</a>
	//               </li>);
	//         }
	//       })}
	//       </ul>
	// 		</div>
  //   );
  // }

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

	// window.onclick = function(e) {
	// 	if (!e.target.matches('.drop-btn')) {
	// 		const dropdowns = document.getElementsByClassName("dropdown-content");
	// 		let i;
	// 		for (i = 0; i < dropdowns.length; i++ ) {
	// 			let openDropdown = dropdowns[1];
	// 			if (openDropdown.classList.contains('show')) {
	// 				openDropdown.classList.remove('show');
	// 			}
	// 		}
	// 	}
	// }


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
		if (name.length > 9) {
			name = name.slice(0, 5) + "...";
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

// <div className="user-name">



// <a className="drop-btn" onClick={this.handleMenuToggle}>{this.formatName()}</a>


// <a>Blog</a>
// <a>Messages</a>
// <a>Your Content</a>
// <a>Stats</a>
// <a>Setting</a>








// render() {
// if(this.props.loggedIn){
//   if(!this.state.dropDownMenu){
// 		return (
// 			<div className="dropdown">
// 					<a className="drop-btn" onClick={this.renderDropDown}>{this.formatName()}</a>
// 						<div id="myDropdown" className="dropdown-content">
// 				    	<a onClick={(e) => this.setState( {dropDownMenu: false}, this.goToUserProfile(e)) }>Profile</a>
//
// 				    	<a onClick={(e) => this.handleLogout(e)}>Logout</a>
// 				  	</div>
// 			</div>
// 			);
//   }
//     return (
//       <div className="user-name">
// 					<a onClick={this.handleMenuToggle}>{this.formatName()}</a>
//           {this.createDropDown()}
// 			</div>
//       );
// }
// 	return (<div></div>);
// }
