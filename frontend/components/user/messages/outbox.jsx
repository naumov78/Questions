import React from 'react';
import { withRouter, Link } from 'react-router';

class Outbox extends React.Component {
constructor(props) {
  super(props);
  this.state = { showMessageContent: 0 }
  this.toggleMessage = this.toggleMessage.bind(this);
  this.hideMessageContent = this.hideMessageContent.bind(this);
}

  componentDidMount() {
  }

  getTime(msg) {
    const date = new Date(msg.created_at)
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
    let subject = msg.title
    if (msg.title.length > 85) {
      subject = msg.title.slice(0,82)
    }
    return <span>{`${subject}...`}</span>
  }

  getClassNameForMessages(message) {
    if (message.unread) {
      return 'unread-message'
    } else {
      return 'read-message'
    }
  }

  toggleMessage(msg) {
    if (this.state.showMessageContent === msg.id) {
      this.setState({ showMessageContent: 0 })
    } else {
      this.setState({ showMessageContent: msg.id })
    }
  }

  hideMessageContent(msg) {
      this.setState({ showMessageContent: 0 })
  }

  getDate(msg, fullMonth = false) {
    const date = new Date(msg.created_at)
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    if (fullMonth) {
      monthNames = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    }
    const Mon = monthNames[date.getMonth()];
    const Day = date.getDate();
    return `${Mon} ${Day}`
  }

  getContent(msg) {
    debugger
    if (this.state.showMessageContent === msg.id) {
      return (
        <td colSpan="4" className = "message-content-container">
          <div className="message-details">
            <div className="message-author-info">
              <table>
                <tbody>
                  <tr>
                    <td className="messsage-author-info-left"><span><Link className="message-content-img-link" to={`/users/${msg.addressee_id}`}><img src={msg.addressee_userpic_url} /></Link></span></td>
                    <td className="messsage-author-info-right">
                      <div><span className="red-font">To:</span> <Link className="message-content-link" to={`/users/${msg.addressee_id}`}>{`${msg.message_addressee.first_name}  ${msg.message_addressee.last_name} - ${msg.message_addressee.description}`}</Link></div>
                      <div><span className="red-font">Subject:</span> {this.getTitle(msg, true)}</div>
                      <div><span className="red-font">Sent:</span> {this.getDate(msg, true)}, {this.getTime(msg)}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="message-info">

            </div>
          </div>
          <div className="message-body">
            {`${msg.body}`}
          </div>
          <div className="message-buttons">
            <button className="ans-btn">Delete</button>
            <button className="ans-btn" onClick={this.hideMessageContent}>Close</button>
          </div>
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
          const addressee = message.message_addressee.first_name + ' ' + message.message_addressee.last_name;

          return (
          <li className="message-line" key={message.id}>
            <table>
              <tbody>
                <tr onClick={() => this.toggleMessage(message)}>
                  <td className="td-message-author"><span className={this.getClassNameForMessages(message)}>{addressee}</span></td>
                  <td className="td-message-title"><span className={this.getClassNameForMessages(message)}>{this.getTitle(message)}</span></td>
                  <td className="td-message-date-time"><span className={this.getClassNameForMessages(message)}>{this.getDate(message)}</span></td>
                  <td className="td-message-date-time"><span className={this.getClassNameForMessages(message)}>{this.getTime(message)}</span></td>
                </tr>
                <tr>
                  {this.getContent(message)}
                </tr>
              </tbody>
            </table>
          </li>

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
