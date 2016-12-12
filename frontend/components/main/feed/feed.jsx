import React from 'react';
import TopicIndex from './topic_index';
import UserIndex from './user_index';

const Feed = (props) => {
  return (
    <div className="feed">
      <h3>Main Content</h3>
      <TopicIndex currentUser={props.currentUser} />
    </div>
  );
}

export default Feed;
