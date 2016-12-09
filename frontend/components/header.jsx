import React from 'react';
import { Link, withRouter } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.router.push(`/users/${this.props.currentUser.id}`)
  }



render() {
  // debugger
    if(this.props.currentUser){
    // if (store.getState().session.currentUser) {
      return (
          <nav>
            <form onSubmit={this.handleSubmit}>
              <input className="auth-form-btn" type="submit" value="User profile" />
            </form>
          </nav>
      );
    } else {
      return (<div></div>);
    }

}

}


export default withRouter(Header);
