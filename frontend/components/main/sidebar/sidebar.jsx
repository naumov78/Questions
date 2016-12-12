import React from 'react';
import UserTopicsMenu from './user_topic_menu';


const SideBar = (props) => {
  return (
    <div className="sidebar">
      <h3>Feeds</h3>
      <UserTopicsMenu currentUser={props.currentUser} />
    </div>
  );
}

export default SideBar;
