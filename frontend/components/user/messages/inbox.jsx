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
    if (msg.title === "") {
      return <span>(no subject)</span>
    }
    let subject = msg.title
    if (msg.title.length > 85) {
      subject = msg.title.slice(0,82)
    }
    return <span>{`${subject}...`}</span>
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

  getTime(date) {
    let Hr = date.getHours()
    let Mins = date.getMinutes()
    let amPm;
    if (Hr < 12) {
      amPm = 'AM'
    } else {
      amPm = 'PM'
    }
    if (Hr < 10) {
      Hr = 0 + Hr.toString()
    } else {
      Hr = Hr.toString()
    }
    if (Mins < 10) {
      Mins = 0 + Mins.toString()
    } else {
      Mins = Mins.toString()
    }
    return `${Hr}:${Mins} ${amPm}`
  }


  getMsgList() {
    const messages = this.props.currentUser.received_messages
    return (
      <ul>

        <li className="message-header" key={Number(new Date())}>
          <table>
            <tbody>
              <tr>
                <td className="td-message-author">From</td>
                <td className="td-message-title">Subject</td>
                <td className="td-message-date-time">Date</td>
                <td className="td-message-date-time">Time</td>
              </tr>
            </tbody>
          </table>
        </li>

        {messages.map(message => {
          const date = new Date(message.created_at)
          const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
          const Mon = monthNames[date.getMonth()];
          const Day = date.getDate();

          return (
          <a onClick={() => this.toggleMessage(message)}>
          <li className="message-line" key={Number(new Date())}>
            <table>
              <tbody>
                <tr>
                  <td className="td-message-author"><span className={this.getClassNameForMessages(message)}>{`${message.author_id}`}</span></td>
                  <td className="td-message-title"><span className={this.getClassNameForMessages(message)}>{this.getTitle(message)}</span></td>
                  <td className="td-message-date-time"><span className={this.getClassNameForMessages(message)}>{Mon} {Day}</span></td>
                  <td className="td-message-date-time"><span className={this.getClassNameForMessages(message)}>{this.getTime(date)}</span></td>
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
      <div className="messages-container">
        {this.getMsgList()}
      </div>
    );
  }
}

export default Inbox;
