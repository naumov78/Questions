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

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  sendMessage(e) {
    e.preventDefault();
    const message = {addressee_id: Number(this.props.params.id), title: this.state.title, body: this.state.body}
    debugger
    this.props.createMessage(message).then(() => {
      this.setState({ messageForm: false })
    })
  }


  render() {
    if (this.state.messageForm) {
      return (
         <div>
           <form onSubmit={this.sendMessage} className="create-question-form">

             <div>
               <input autoFocus={true} className="auth-form-input answer-input" type="text" placeholder="Message Title" onChange={this.update("title")} />
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
                   <input type="submit" value="Send Message" />
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
