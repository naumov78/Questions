import React from 'react';
import { withRouter, Link } from 'react-router';
import MessageContainer from '../../message/message_container';


class Inbox extends React.Component {
constructor(props) {
  super(props);
  this.state = { showMessageContent: 0, reply: false }
  this.toggleMessage = this.toggleMessage.bind(this);
  this.changeToReply = this.changeToReply.bind(this);
  this.showMessageContent = this.showMessageContent.bind(this);
  this.hideMessageContent = this.hideMessageContent.bind(this);
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

  showMessageContent(message) {
    if (message.unread) {
      this.markMessageAsRead(message.id)
    } else {
      this.setState({ showMessageContent: message.id })
    }
  }

  hideMessageContent(msg) {
    debugger
      this.setState({ showMessageContent: 0 })
      debugger
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
                    <td className="messsage-author-info-left"><span><Link className="message-content-img-link" to={`/users/${msg.author_id}`}><img src={msg.author_userpic_url} /></Link></span></td>
                    <td className="messsage-author-info-right">
                      <div><span className="red-font">From:</span> <Link className="message-content-link" to={`api/users/${msg.author_id}`}>{`${msg.message_author.first_name}  ${msg.message_author.last_name} - ${msg.message_author.description}`}</Link></div>
                      <div><span className="red-font">Subject:</span> {this.getTitle(msg)}</div>
                      <div><span className="red-font">Received:</span> {this.getDate(msg, true)}, {this.getTime(msg)}</div>
                      <a>TEST</a>
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
            <button className="ans-btn" onClick={this.changeToReply}>Reply</button>
            <button className="ans-btn">Delete</button>
            <button className="ans-btn" onClick={this.hideMessageContent}>Close</button>
          </div>
        </td>
      )
    } else {
      return null;
    }
  }

  changeToReply() {
    this.setState({ showMessageContent: this.state.showMessageContent, reply: true })
  }

  getReply(msg) {
    if (this.state.showMessageContent === msg.id && this.state.reply) {
      return <MessageContainer />;
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

          const author = message.message_author.first_name + ' ' + message.message_author.last_name;

          return (

          <li className="message-line" key={message.id}>
            <table>
              <tbody>

                <tr onClick={() => this.toggleMessage(message)}>
                  <td className="td-message-author"><span className={this.getClassNameForMessages(message)}>{author}</span></td>
                  <td className="td-message-title"><span className={this.getClassNameForMessages(message)}>{this.getTitle(message)}</span></td>
                  <td className="td-message-date-time"><span className={this.getClassNameForMessages(message)}>{this.getDate(message)}</span></td>
                  <td className="td-message-date-time"><span className={this.getClassNameForMessages(message)}>{this.getTime(message)}</span></td>
                </tr>

                <tr>
                  {this.getContent(message)}
                </tr>
                <tr>
                  {this.getReply(message)}
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
    debugger
    return (
      <div className="messages-container">
        {this.getMsgList()}
      </div>
    );
  }
}

export default withRouter(Inbox);
