import React from 'react';
import SideBar from './sidebar/sidebar';
import Feed from './feed/feed';
import { withRouter } from 'react-router';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.currentUser && this.props.location.pathname !== "/settopics"){
      // debugger
      return (
        <div className="page-wraper">
          <div className="grid_page">
            <div className="sidebar-container">
              <SideBar currentUser={this.props.currentUser} />
            </div>
            <div className="feed-container">
              <Feed
                currentUser={this.props.currentUser}
                topic_id={this.props.params.topic_id}
                question_id={this.props.params.question_id} />
            </div>
          </div>
        </div>
      );
    }
    return <div></div>
  }
}



export default withRouter(Main);
