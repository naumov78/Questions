import React from 'react';
import { Link, withRouter } from 'react-router';

class UserTopicsMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentUser) {
    return (
        <div className="topic-menu">
          <ul>
            {this.props.currentUser.topics.map((topic, i) => {
              return (
                <Link to={`/topics/${topic.id}/questions`} key={`${topic.id}`}>
                  <li>{topic.title}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

}


export default UserTopicsMenu;
