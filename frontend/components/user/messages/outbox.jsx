import React from 'react';


class Outbox extends React.Component {
constructor(props) {
  super(props);
  this.state = { showMessageContent: 0 }
  this.toggleMessage = this.toggleMessage.bind(this);
}

  componentDidMount() {
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

  getTitle(msg) {
    if (msg.title === "") {
      return <span>(no subject)</span>
    }
    return <span>{msg.title}</span>
  }

  getClassNameForMessages(message) {
    if (message.unread) {
      return 'unread-message'
    } else {
      return 'read-message'
    }
  }

  toggleMessage(id) {
    if (this.state.showMessageContent === id) {
      this.setState({ showMessageContent: 0 })
    } else {
      this.setState({ showMessageContent: id })
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

  getMsgList() {
    const messages = this.props.currentUser.sent_messages
    return (
      <ul>

        <li className="message-header" key={Number(new Date())}>
          <table>
            <tbody>
              <tr>
                <td className="td-message-author">To</td>
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
          <a onClick={() => this.toggleMessage(message.id)}>
          <li className="message-line" key={Number(new Date())}>
            <table>
              <tbody>
                <tr>
                  <td className="td-message-author"><span className={this.getClassNameForMessages(message)}>{`${message.addressee_id}`}</span></td>
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

export default Outbox;
