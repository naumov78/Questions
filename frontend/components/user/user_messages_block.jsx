import React from 'react';
import { Link, withRouter } from 'react-router';
import InboxContainer from './messages/inbox_container';
import Outbox from './messages/outbox';


class UserMessagesBlock extends React.Component {
constructor(props) {
  super(props);
  this.state = { showMessages: false, inbox: false, outbox: false }
}

getReceivedMessages() {

}

getSentMessages() {

}

hideMessages() {
  this.setState({ showMessages: false, inbox: false, outbox: false })
}

showMessages() {
  this.setState({ showMessages: true, inbox: true })
}

switchToInbox() {
  this.setState({ inbox: true, outbox: false })
}

switchToOutbox() {
  this.setState({ inbox: false, outbox: true })
}


getMessagesList() {
  if (this.state.inbox) {
    debugger
    return (
    <div>
      <div>
        <span className="user-details-container-title">Inbox</span>
        <span className="user-details-container-title inactive"><button onClick={this.switchToOutbox.bind(this)}>Outbox</button></span>
      </div>
      <div> <InboxContainer /> </div>
    </div>
  )
  }

  if (this.state.outbox) {
    debugger
    return (
    <div>
      <div>
        <span className="user-details-container-title inactive"><button onClick={this.switchToInbox.bind(this)}>Inbox</button></span>
        <span className="user-details-container-title">Outbox</span>
      </div>
      <div> <Outbox currentUser = {store.getState().user.user} /> </div>
    </div>
  )
  }
}



getMessagesBtn(user) {
  if (this.state.showMessages) {
    return <button className="cancel-link link details-btn" onClick={this.hideMessages.bind(this)}>Hide Messages</button>
  } else if (!this.state.showMessages) {
    return <button className="cancel-link link details-btn" onClick={this.showMessages.bind(this)}>Show Messages</button>
  }
}

render() {
  const user = store.getState().user.user
  if (typeof user.id !== 'undefined') {
  return (
    <div>
    {this.getMessagesBtn()}
    {this.getMessagesList()}
    </div>
  );
} else {
  return null;
}

}

}


export default withRouter(UserMessagesBlock)
