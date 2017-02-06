import React from 'react';
import { Link, withRouter } from 'react-router';
import GreetingContainer from './greeting_container';
import HeaderAskFormContainer from './header_ask_form_container';

class Header extends React.Component {


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
                      <a>Read</a>
                    </div>
                    <div className="answer-link">
                      <a>Answer</a>
                    </div>
                    <div className="notifications-link">
                      <a>Notifications</a>
                    </div>
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
