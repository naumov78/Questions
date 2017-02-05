import React from 'react';
import SideBarContainer from './sidebar/sidebar_container';
import Feed from './feed/feed';
import UserIndexContainer from './feed/user_index_container';
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
      return <UserIndexContainer />
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
              <SideBarContainer />
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


// <UserIndex currentUser={this.props.currentUser} watched_questions={store.getState().session.currentUser.watched_questions}/>
