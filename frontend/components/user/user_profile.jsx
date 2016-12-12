import React from 'react';
import GreetingContainer from '../greeting_container';
import { Link, withRouter } from 'react-router';



class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    // this.state = { edit: false, first_name: "", last_name: "", description: "", userpic: "missing-userpic.png" }
    this.state = { edit: false, first_name: "", last_name: "", description: "", userpicFile: null, userpicUrl: null }
    this.changeToEdit = this.changeToEdit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }


  componentDidMount() {
    this.props.fetchUser(this.props.params.id).then(() => this.validateUser());
  }

  validateUser() {
    if (parseInt(this.props.params.id) !== this.props.currentUser.id) {
      return this.props.router.push("/")
    }
  }

  update(field) {
    return e => {
      this.setState({
      [field]: e.currentTarget.value
    });
    }
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
       this.setState({userpicFile: file, userpicUrl: fileReader.result})
    }
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  getTopics() {
      return $.ajax({
        type: "GET",
        url: '/api/user_subscribed_topics',
      });
    }

  renderSubscribedTopics() {
    return (
      <ul>
        {this.props.topics.map((topic) => {
          return <li>{topic}</li>
        })}
      </ul>
    )
  }

  changeToEdit(e) {
    e.preventDefault();
    this.setState({
      edit: true,
      userpic: this.props.currentUser.userpic,
      first_name: this.props.currentUser.first_name,
      last_name: this.props.currentUser.last_name,
      description: this.props.currentUser.description

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
      id: this.props.currentUser.id,
      userpic: this.state.userpic,
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
          <div className="userpic-profile">
            <img src={this.props.currentUser.userpic_url} />
            <input type="file" onChange={(e) => this.updateFile(e)} value="Update photo"/>
          </div>

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
    <div className="ui_container">
      <div className="user-profile">
        <div className="userpic-profile">
          <img src={this.props.currentUser.userpic_url} />
        </div>

        <div className="user-info-profile">
          <div className="user-name">
            <p>{this.props.currentUser.first_name}&nbsp;&nbsp;{this.props.currentUser.last_name}</p>
          </div>
          <div className="user-descr">
            <p>{this.props.currentUser.description}</p>
          </div>
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
