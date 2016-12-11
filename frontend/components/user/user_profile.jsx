import React from 'react';
import GreetingContainer from '../greeting_container';
import { Link, withRouter } from 'react-router';



class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { edit: false, first_name: "", last_name: "", description: "" }
    this.changeToEdit = this.changeToEdit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.params.id);
  }


  update(field) {
    return e => {
      // debugger
      this.setState({
      [field]: e.currentTarget.value
    });
  }
  }

  getTopics() {
    // debugger
      return $.ajax({
        type: "GET",
        url: '/api/user_subscribed_topics',
      });
    }

  renderSubscribedTopics() {
    return (
      <ul>
        {this.props.user.topics.map((topic) => {
          return <li>{topic}</li>
        })}
      </ul>
    )
  }

  changeToEdit(e) {
    e.preventDefault();
    this.setState({
      edit: true,
      first_name: this.props.user.first_name,
      last_name: this.props.user.last_name,
      description: this.props.user.description
    });
  }



  renderSpecificError(fieldName) {
		let singleError = "";
		const allErrors = this.props.errors;

		allErrors.forEach(error => {
			if(error.includes(fieldName)){
				singleError = error;
			}
		});
		if (singleError === "Password is too short (minimum is 1 character)"){
			singleError = "Password is too short"
		}
		return singleError;
	}


  getDescription(){
    let descr = this.state.description;
    if (typeof descr === "undefined"){
      descr = "";
    }
    return descr;
  }

  handleUpdate(e) {
    e.preventDefault();
    this.props.updateUser(this.getUser()).then(() => this.setState({edit: false}));
  }

  getUser() {
    // debugger
    return {
      id: this.props.user.id,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      description: this.state.description
  };
}

  render() {
    // debugger
    // className="loader"

  if (this.state.edit) {
    // debugger
    return (
      <div className="uu-form-container">
        <form onSubmit={ this.handleUpdate }
          className="uu-form">

          <div className="uu-input">
            <label className="uu-field-title">First Name</label>
            <input
              className="auth-form-input"
              type="text"
              value={`${this.state.first_name}`}
              onChange={this.update("first_name")} />
            <div className="signup-form-errors">{this.renderSpecificError("First name")}</div>
            <br />
          </div>

          <div className="uu-input">
            <label className="uu-field-title">Last Name</label>
            <input
              className="auth-form-input"
              type="text"
              value={`${this.state.last_name}`}
              onChange={this.update("last_name")} />
            <div className="signup-form-errors">{this.renderSpecificError("Last name")}</div>
            <br />
          </div>

          <div className="uu-input">
            <label className="uu-field-title">Description</label>
            <input
              className="auth-form-input"
              type = "text"
              value={`${this.getDescription()}`}
              onChange={this.update("description")} />
            <div className="signup-form-errors">{this.renderSpecificError("Description")}</div>
          </div>

          <br />
        <div className="uu-buttons group">
            <Link className="cancel-link link" onClick={() => this.setState({edit: false})}>Cancel</Link>
            <input type="submit" className="auth-form-btn button" value="Update" />
        </div>

        </form>
      </div>


    );

  } else {
    // debugger

    return (
    <div>
      <div className="user-profile-greeting">
        <GreetingContainer />
      </div>

      <div className="user-profile">
        <div className="user-name">
          <p>{this.props.user.first_name}&nbsp;&nbsp;{this.props.user.last_name}</p>
        </div>
        <div className="user-descr">
          <p>{this.props.user.description}</p>
        </div>

        <div>{this.renderSubscribedTopics()}</div>


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


// <Link onClick={() => this.toggleDropDown()} >Link</Link>
// {this.createDropDown()}




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
