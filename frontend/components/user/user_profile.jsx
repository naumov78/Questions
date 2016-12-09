import React from 'react';
import GreetingContainer from '../greeting_container';
import { Link, withRouter } from 'react-router';



class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { edit: false, first_name: "", last_name: "", description: "" }
    this.changeToEdit = this.changeToEdit.bind(this);
  }

  componentDidMount() {
    // const user_id = store.getState().session.currentUser.id;
    // fetchUser(user_id);
    // return this.setState(fetchUser(user_id));
    // debugger
    this.props.fetchUser(this.props.params.id);
  }

  componentWillReceiveProps(newProps) {
    // debugger
    // if (this.props.params.id !== newProps.params.id) {
    //   this.props.fetchUser(newProps.params.id);
    // }
  }

  update(field) {

    return e => {
      // debugger
      this.setState({
      [field]: e.currentTarget.value
    });
  }
  }

  changeToEdit(e) {
    e.preventDefault();
    // debugger
    this.setState({
      edit: true,
      first_name: this.props.user.first_name,
      last_name: this.props.user.last_name,
      description: this.props.user.description
    });
  }

  createDropDown() {
    // e.preventDefault();
    const menuItems = ['Profile', 'Edit User', 'Log out'];
    return (
      <ul id="user-profile-menu" className="invis-drop-down">
        {menuItems.map((item, i) => (
          <li key={`item-${i}`} id={`item-${i}`}>{item}</li>
        ))}
      </ul>
    );
  }

  toggleDropDown() {
    if ($('#user-profile-menu').hasClass('invis-drop-down')) {
      $('.invis-drop-down').removeClass().addClass('vis-drop-down');
    } else {
      $('.vis-drop-down').removeClass().addClass('invis-drop-down');
    }
  }


  getDescription(){
    let descr = this.state.description;
    if (typeof descr === "undefined"){
      descr = "";
    }
    return descr;
  }

  getUser() {
    // debugger
    return {
      id: this.props.user.id,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      description: this.props.user.description
  };
}

  render() {
    // debugger
    // className="loader"

  if (this.state.edit) {
    // debugger
    return (
      <div className="uu-form-container">
        <form onSubmit={ () => {this.props.updateUser(this.getUser()).then(() => this.setState({edit: false}))}}
          className="uu-form">

          <div className="uu-input">
            <label className="uu-field-title">First Name</label>
            <input
              className="auth-form-input"
              type="text"
              value={`${this.state.first_name}`}
              onChange={this.update("first_name")} />
            <br />
          </div>

          <div className="uu-input">
            <label className="uu-field-title">Last Name</label>
            <input
              className="auth-form-input"
              type="text"
              value={`${this.state.last_name}`}
              onChange={this.update("last_name")} />
            <br />
          </div>

          <div className="uu-input">
            <label className="uu-field-title">Description</label>
            <input
              className="auth-form-input"
              type = "text"
              value={`${this.getDescription()}`}
              onChange={this.update("description")} />
          </div>


        <div className="uu-buttons group">
            <Link className="cancel-link link" onClick={() => this.setState({edit: false})}>Cancel</Link>
            <input type="submit" className="auth-form-btn button" value="Update" />
        </div>

        </form>
      </div>


    );

  } else {

    return (
    <div>
      <div className="user-profile-greeting">
        <GreetingContainer />
      </div>
      <Link onClick={() => this.toggleDropDown()} >Link</Link>
      {this.createDropDown()}
      <div className="user-profile">
        <div className="user-name">
          <p>{this.props.user.first_name}&nbsp;&nbsp;{this.props.user.last_name}</p>
        </div>
      </div>

      <div className="edit-btn">
         <form onSubmit={this.changeToEdit}>
           <input type="submit" className="auth-form-btn" value="Edit" />
         </form>
       </div>

    </div>

      );
    }

  }

}
export default withRouter(UserProfile);






// <form onSubmit={() => this.setState({edit: false})}>
//   <input type="submit" value="Cancel" className="auth-form-btn" />
// </form>


// <Link to="#" onClick={() => this.createDropDown()} >Link</Link>

// $('.step_wrapper').on('click','.step_box',function () {
//     $('.step_box').removeClass('selected');
//     $(this).addClass('selected')
// });



// <form onSubmit={ () => this.props.updateUser(this.getUser())} className="edit-user">



// if (!this.props.user) {
//   return (<div>Loading...</div>);
// } else {





// <div className="edit-btn">
//   <form onSubmit={this.getEditForm}>
//     <input type="submit" className="auth-form-btn" value="Edit" />
//   </form>
// </div>


//
// const { firstname, lastname } = this.state
// props.updateUser({ firstname, lastname })
