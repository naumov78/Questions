import React from 'react';


class Outbox extends React.Component {
constructor(props) {
  super(props);
  this.state = { showMessageContent: 0 }
  this.toggleMessage = this.toggleMessage.bind(this);
}

  componentDidMount() {
    debugger
  }


  getTitle(msg) {
    if (msg.title == null) {
      return <span></span>
    }
    return <span>{msg.title}</span>
  }

  toggleMessage(id) {
    if (this.state.showMessageContent === id) {
      this.setState({ showMessageContent: 0 })
    } else {
      this.setState({ showMessageContent: id })
    }
  }

  getContent(msg) {
    debugger
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

        <li key={Number(new Date())}>
          <table>
            <tbody>
              <tr>
                <td width="150px">To</td>
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
          <a onClick={() => this.toggleMessage(message.id)}>
          <li key={Number(new Date())}>
            <table>
              <tbody>
                <tr>
                  <td width="150px">{`${message.addressee_id}`}</td>
                  <td width="250px">{this.getTitle(message)}</td>
                  <td width="100px">{Mon} {Day}, {Yr}</td>
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

export default Outbox;
