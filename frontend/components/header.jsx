import React from 'react';
import { Link, withRouter } from 'react-router';
import GreetingContainer from './greeting_container';
import HeaderAskFormContainer from './header_ask_form_container';

class Header extends React.Component {
  constructor() {
    super();
    this.state = { unreadMessages: 0 }
  }

  componentWillReceiveProps(nextProps) {
      this.setState({ unreadMessages: nextProps.currentUser.unread_messages })
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.setState({ unreadMessages: this.props.currentUser.unread_messages })
    }
  }

  getUnreadMessagesNumber() {
    const unreadMessages = this.state.unreadMessages
    if (unreadMessages === 0) {
      return null;
    } else {
      return (
        <span className="header-unread">{unreadMessages}</span>
      )
    }
  }

  render() {
    if(this.props.currentUser && this.props.location.pathname !== "/settopics"){
      return (
          <div className="header">
            <div className="header-nav">
              <div className="header-logo">
                <h2><Link to="/">Questions</Link></h2>
              </div>
              <div className="header-content">

                <div className="ask-form-container">
                  <HeaderAskFormContainer />
                </div>

                <div className="nav-container group">
                  <div className="nav-links">
                    <div className="read-link">
                      <span>Read</span>
                    </div>
                    <div className="answer-link">
                      <span>Answer</span>
                    </div>
                    <Link to={`users/${this.props.currentUser.id}/inbox`}>
                    <div className="messages-link">
                      <a>Messages</a>
                      {this.getUnreadMessagesNumber()}
                    </div>
                    </Link>

                    <div className="greeting-container">
                      <GreetingContainer />
                    </div>

                  </div>
                </div>

              </div>
          </div>
        </div>
      );
    } else {
      return <div></div>
    }
  }

}


export default withRouter(Header);
