import React from 'react';
import { Link, withRouter } from 'react-router';
import GreetingContainer from './greeting_container';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.router.push(`/users/${this.props.currentUser.id}`)
  }

  handleAskQuestion(e) {
    e.preventDefault();
    this.props.router.push("/createq")
  }


  // checkLoggedIn(){
  //   if (!this.props.currentUser) {
  //     this.props.router.push("/login");
  //   }
  // }



  render() {
    if(this.props.currentUser && this.props.location.pathname !== "/settopics"){
      return (
          <div className="header">
            <div className="header-nav">
              <div className="header-logo">
                <h2><a href="/">Questions</a></h2>
              </div>
              <div className="header-content">

                <div className="ask-form-container">
                  <form className="ask-form" onSubmit={(e) => this.handleAskQuestion(e)}>
                    <input className="text-input" type="text" placeholder="Ask Question"></input>
                    <input className="header-ask-btn" type="submit" value="Ask Question"/>
                  </form>
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
