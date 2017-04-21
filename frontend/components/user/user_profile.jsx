import React from 'react';
import GreetingContainer from '../greeting_container';
import UserDetailsBlock from './user_details_block';
import CurrentUserDetailsBlock from './current_user_details_block';
import UserMessagesBlock from './user_messages_block';
import MessageContainer from '../message/message_container';
import { Link, withRouter } from 'react-router';


class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ownProfile: false, edit: false, first_name: "", last_name: "", description: "", userpicFile: null, userpicUrl: null, messageForm: false, fetching: true }
    this.changeToEdit = this.changeToEdit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }


  componentDidMount() {
    debugger
    this.props.fetchUser(Number(this.props.params.id)).then(() => {
      this.setState({ fetching: false })
    })
  }


  componentWillMount() {
    debugger
    if (store.getState().session.currentUser.id === Number(this.props.params.id)) {
      this.setState({ ownProfile: true })
    }
  }

  componentDidUpdate(){
    debugger
  }


  componentWillReceiveProps(newProps) {
    debugger
    const id = newProps.params.id;
    if (id !== this.props.params.id) {
      this.setState({ownProfile: false, edit: false, first_name: "", last_name: "", description: "", userpicFile: null, userpicUrl: null, messageForm: false, fetching: true})
      this.props.fetchUser(Number(id)).then(() => {
        this.setState({ fetching: false })
      })
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
      this.setState({ userpicFile: file });
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
    if (typeof descr === "undefined" || descr === 'null'){
      descr = "";
    }
    return descr;
  }

  checkCurrentUserDescr() {
    if (this.props.currentUser.description === 'null') {
      return "";
    } else {
      return this.props.currentUser.description;
    }
  }

  handleUpdate(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("user[id]", this.props.currentUser.id);
    if(!(this.state.userpicFile === null)){
      formData.append("user[userpic]", this.state.userpicFile);
    }
    formData.append("user[first_name]", this.state.first_name);
    formData.append("user[last_name]", this.state.last_name);
    formData.append("user[description]", this.state.description);
    this.props.updateUser(formData, this.props.currentUser.id).then(() => this.setState({edit: false}));
  }

  getUser() {
    return {
      id: this.props.currentUser.id,
      userpic: this.state.userpicFile,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      description: this.state.description
  };
}

  getEditBtn() {
    if (this.state.ownProfile) {
      return (
        <div className="edit-btn">
           <form onSubmit={this.changeToEdit}>
             <input type="submit" className="ans-btn" value="Edit" />
           </form>
        </div>
      );
    } else {
      return null;
    }
  }


  getUserDetailsBlock() {
    if (typeof this.props.user.id !== 'undefined') {
      if (Number(this.props.params.id) === store.getState().session.currentUser.id) {
        return <CurrentUserDetailsBlock />
      } else {
        return <UserDetailsBlock />
        }
    } else {
      return null;
    }
  }

  getMessagesBlock() {
    if (typeof this.props.user.id !== 'undefined') {
      if (Number(this.props.params.id) === store.getState().session.currentUser.id) {
        if (this.props.params.inbox === "inbox") {
          return <UserMessagesBlock inbox={true} />
        } else {
          return <UserMessagesBlock />
        }
      } else {
        return null;
        }
    } else {
      return null;
    }
  }

  getMessageButton() {
    if (typeof this.props.user.id !== 'undefined') {
      if (Number(this.props.params.id) !== store.getState().session.currentUser.id) {
        return (
          <button  className="upvote-btn compose-message-btn-profile" onClick={() => this.toggleMessage()}>{this.messageBtn()}</button>
        )
      } else {
        return null;
        }
    } else {
      return null;
    }
  }

  messageBtn() {
    if (this.state.messageForm) {
      return 'Discard Message'
    } else {
      return 'Send Message'
    }
  }

  toggleMessage() {
    this.setState({ messageForm: !this.state.messageForm })
  }

  getMessageForm() {
    if (this.state.messageForm) {
      return <MessageContainer />
    } else {
      return null;
    }
  }


  render() {
    if (!this.state.fetching) {
        if (this.state.edit && this.state.ownProfile) {
          return (
            <div>
              <div className="uu-form-container">
              <form onSubmit={ this.handleUpdate }
                className="uu-form">
                <div className="userpic-profile">
                  <img src={this.props.user.userpic_url} />
                  <br />
                  <input type="file" onChange={(e) => this.updateFile(e)} />
                </div>
                <br />
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
                    value={this.state.description}
                    onChange={this.update("description")} />
                  <div className="signup-form-errors">{this.renderSpecificError("Description")}</div>
                </div>

                <br />
              <div className="uu-buttons group">
                  <Link className="cancel-link link" onClick={() => this.setState({edit: false})}>Cancel</Link>
                  <input type="submit" className="ans-btn" value="Update" />
              </div>

              </form>

              <div className="user-details">
                {this.getUserDetailsBlock()}
              </div>

              <div>
                {this.getMessagesBlock()}
              </div>

              </div>
            </div>
          );
        } else {
          const date = new Date(this.props.user.created_at);
          const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
          const qMon = monthNames[date.getMonth()];
          const qDay = date.getDate();
          const qYr = date.getFullYear();
          return (
          <div className="ui_container">
            <div className="user-profile">
              <div className="userpic-profile">
                <img src={this.props.user.userpic_url} />
              </div>
              <br />
              <div className="user-info-profile">
                <div className="user-name">
                  <p>{this.props.user.first_name}&nbsp;&nbsp;{this.props.user.last_name}
                    {this.getMessageButton()}
                  </p>
                </div>
                <div className="user-descr">
                  <p>{this.props.user.description}</p>
                </div>
                <div className="user-since">
                  <p>Member since {qMon} {qDay} {qYr}</p>
                </div>
                {this.getEditBtn()}
              </div>
              {this.getMessageForm()}
              <div className="user-details">
                {this.getUserDetailsBlock()}
                {this.getMessagesBlock()}
              </div>

            </div>
          </div>
            );
          }
      } else {
        return (
        <div>
          <div className="loading-container">
            <i className="fa fa-quora fa-spin fa-3x" aria-hidden="true"></i>
          </div>
        </div>
        );
      }
    }

}

export default withRouter(UserProfile);
