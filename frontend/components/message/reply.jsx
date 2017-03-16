import React from 'react';
import { Link, withRouter } from 'react-router';


class Reply extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: `Re: ${this.props.oldTitle}`, body: `Re: ${this.props.oldBody}\n\n`, messageForm: true }
    this.sendMessage = this.sendMessage.bind(this)
    this.closeReply = this.closeReply.bind(this)
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  sendMessage(e) {
    e.preventDefault();
    const message = {addressee_id: this.props.replyTo, title: this.state.title, body: this.state.body}
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

  closeReply() {
    this.setState({ messageForm: false })
  }


  render() {
    if (this.state.messageForm) {
      return (
        <td colSpan="4" className = "message-content-container">
          <div className="reply-container">
           <button className="close-reply-form" onClick={this.closeReply}>X</button>
             <div className="reply-form-container">
             <form onSubmit={this.sendMessage} className="create-question-form message-form-profile">

               <div>
                 <span className="reply-title">Re: {this.props.oldTitle}</span>
               </div>
               <div className="question-input centered">
                 <textarea
                 id="reply-input"
                 autoFocus={true}
                 onChange={this.update("body")}
                 className="auth-form-input answer-input"
                 value={this.state.body}/>
               </div>
               <br />
                 <div className="button-part">
                   <div id="add-question" className="answer-buttons send-reply-btn">
                     <span className="message-errors">{this.renderErrors()}</span>
                     <span><input className="ans-btn" type="submit" value="Send Reply" /></span>
                   </div>
                 </div>
             </form>
             </div>
           </div>
        </td>
       );
    } else {
      return null;
    }
  }

}

export default withRouter(Reply);
