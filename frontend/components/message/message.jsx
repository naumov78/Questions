import React from 'react';
import { Link, withRouter } from 'react-router';


class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", body: "", messageForm: true }
    this.sendMessage = this.sendMessage.bind(this)


  }

  componentDidMount() {
  }

  componentWillUnmount() {
    debugger
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  sendMessage(e) {
    e.preventDefault();
    // let body = this.state.body;
    // if (this.state.body === "") {
    //   body = null;
    // }
    const message = {addressee_id: Number(this.props.params.id), title: this.state.title, body: this.state.body}
    this.props.createMessage(message).then((success) => {
      this.setState({ messageForm: false })
    })
  }

  renderErrors() {
    if (this.props.errors[0] === "Body can't be blank") {
      return "You have to write a message"
    } else {
      return null;
    }
  }

  render() {
    if (this.state.messageForm) {
      debugger
      return (
         <div className="message-form-profile-container">
           <form onSubmit={this.sendMessage} className="create-question-form message-form-profile">

             <div>
               <input autoFocus={true} className="auth-form-input answer-input" type="text" placeholder="Subject" onChange={this.update("title")} />
             </div>
             <div className="question-input">
               <textarea
               placeholder="Message"
               onChange={this.update("body")}
               className="auth-form-input answer-input"/>
             </div>
             <br />
               <div className="button-part">
                 <div id="add-question" className="answer-buttons">
                   <span className="message-errors">{this.renderErrors()}</span>
                   <span><input className="ans-btn" type="submit" value="Send Message" /></span>
                 </div>
               </div>
           </form>
        </div>
       );
    } else {
      return <div></div>
    }
  }

}

export default withRouter(Message);
