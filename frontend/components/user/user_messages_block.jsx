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

componentDidMount() {
  if (this.props.inbox) {
    this.setState({ showMessages: true, inbox: true })
  }
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
    return (
    <div>
      <div>
        <span className="messages-titles">Inbox</span>
        <span className="messages-titles inactive"><button onClick={this.switchToOutbox.bind(this)}>Outbox</button></span>
      </div>
      <div className="inbox-outbox-container"> <InboxContainer /> </div>
    </div>
  )
  }

  if (this.state.outbox) {
    return (
    <div>
      <div>
        <span className="messages-titles inactive"><button onClick={this.switchToInbox.bind(this)}>Inbox</button></span>
        <span className="messages-titles">Outbox</span>
      </div>
      <div className="inbox-outbox-container"> <Outbox currentUser = {store.getState().user.user} /> </div>
    </div>
  )
  }
}



getMessagesBtn(user) {
  if (this.state.showMessages) {
    return <button className="ans-btn" onClick={this.hideMessages.bind(this)}>Hide Messages</button>
  } else if (!this.state.showMessages) {
    return <button className="ans-btn" onClick={this.showMessages.bind(this)}>Show Messages</button>
  }
}

getUnreadMessagesNumber() {
  const user = store.getState().user.user
  const unreadMessages = user.unread_messages
  if (unreadMessages === 0) {
    return null;
  } else {
    return (
      <span className="unread-messages-number">{unreadMessages}</span>
    )
  }
}

render() {
  const user = store.getState().user.user
  if (typeof user.id !== 'undefined') {
  return (
    <div className="message-box">
      <div className="show-hide-container">
        <span>{this.getMessagesBtn()}</span>
        {this.getUnreadMessagesNumber()}
      </div>
      <div className="message-list-container">
        {this.getMessagesList()}
      </div>
    </div>
  );
} else {
  return null;
}

}

}


export default withRouter(UserMessagesBlock)
