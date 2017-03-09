import React from 'react';


class Inbox extends React.Component {
constructor(props) {
  super(props);
  this.state = { showMessageContent: 0 }
  this.toggleMessage = this.toggleMessage.bind(this);
}

  componentDidMount() {
  }


  getTitle(msg) {
    if (msg.title == null) {
      return <span></span>
    }
    return <span>{msg.title}</span>
  }

  toggleMessage(message) {
    if (this.state.showMessageContent === message.id) {
      this.setState({ showMessageContent: 0 })
    } else {
      if (message.unread) {
        this.markMessageAsRead(message.id)
      } else {
        this.setState({ showMessageContent: message.id })
      }
    }
  }

  getContent(msg) {
    if (this.state.showMessageContent === msg.id) {
      return (
        <td colSpan="3">
          {`${msg.body}`}
        </td>
      )
    } else {
      return null;
    }
  }


  markMessageAsRead(id) {
    this.props.readMessage(id).then(() => {
      this.setState({ showMessageContent: id })
    })
  }

  getClassNameForMessages(message) {
    if (message.unread) {
      return 'unread-message'
    } else {
      return 'read-message'
    }
  }

  getMsgList() {
    const messages = this.props.currentUser.received_messages
    return (
      <ul>

        <li key={Number(new Date())}>
          <table>
            <tbody>
              <tr>
                <td width="150px">From</td>
                <td width="250px">Title</td>
                <td width="100px">Date</td>
              </tr>
            </tbody>
          </table>
        </li>

        {messages.map(message => {
          const date = new Date(message.created_at)
          const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
          const Mon = monthNames[date.getMonth()];
          const Day = date.getDate();
          const Yr = date.getFullYear()
          return (
          <a onClick={() => this.toggleMessage(message)}>
          <li key={Number(new Date())}>
            <table>
              <tbody>
                <tr>
                  <td width="150px"><span className={this.getClassNameForMessages(message)}>{`${message.author_id}`}</span></td>
                  <td width="250px"><span className={this.getClassNameForMessages(message)}>{this.getTitle(message)}</span></td>
                  <td width="100px"><span className={this.getClassNameForMessages(message)}>{Mon} {Day}, {Yr}</span></td>
                </tr>
                <tr>
                  {this.getContent(message)}
                </tr>
              </tbody>
            </table>
          </li>
          </a>

        )
        })}
  </ul>
    )
  }


  render() {
    return (
      <div className="feed">
        {this.getMsgList()}
      </div>
    );
  }
}

export default Inbox;
