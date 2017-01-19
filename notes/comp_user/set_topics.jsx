import React from 'react';
import { Link, withRouter } from 'react-router';


class SetTopics extends React.Component {
  constructor(props) {
    super(props);
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.router.push("/");
  }

  renderTopics() {
    this.props.topics
  }


  render() {

    return (
      <div className="set-topics-container">

        <div className="set-topics-title">
          <p>Choose your topics</p>
        </div>


        <form onSubmit={(e) => this.handleSubmit(e)} className="set-topics-form" onSubmit={this.handleSubmit()}>

          <div className="credentials-input">
            <label className="auth-form-field-titles"></label>
            <input className="auth-form-input"
              type="text"
              value={this.state.email}
              placeholder="Email"
              onChange={this.update("email")} />
          </div>

          <div className="credentials-input">
            <label className="auth-form-field-titles"></label>
            <input className="auth-form-input"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.update("password")} />
          </div>

          <div className="submit login-btn">
            <input type="submit"
              className="auth-form-btn"
              value="Login" />
          </div>

        </form>

        <div className="login-form-errors">
           {this.renderLoginErrors()}
        </div>

      </div>


    );
  }

}

export default withRouter(SetTopics);
