import React from 'react';
import SideBar from './sidebar/sidebar';
import Feed from './feed/feed';
import UserIndex from './feed/user_index';
import TopicIndexContainer from './topic_index_container';
import { withRouter } from 'react-router';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
  }

  componentWillReceiveProps(newProps) {
  }

  getIndexPage() {
    if (this.props.location.pathname === '/') {
      return <UserIndex currentUser={this.props.currentUser} />
    } else {
      return null;
    }
  }

  render() {
    if(this.props.currentUser && this.props.location.pathname !== "/settopics"){
      return (
        <div className="page-wraper">
          <div className="grid_page">
            <div className="sidebar-container">
              <SideBar currentUser={this.props.currentUser} />
            </div>
              {this.getIndexPage()}
          </div>
        </div>
      );
    }
    return <div></div>
  }
}


export default withRouter(Main);
