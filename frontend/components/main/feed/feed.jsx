
import React from 'react';
import TopicIndex from './topic_index';
import UserIndex from './user_index';
import SingleQuestionContainer from '../../question/single_question_container'

const Feed = (props) => {
  // debugger
  return (
    <div className="feed">
      <h3>Main Content</h3>
      <SingleQuestionContainer currentUser={props.currentUser}
      topic_id={props.topic_id}
      question_id={props.question_id} />
    </div>
  );
}

export default Feed;


// currentUser={props.currentUser}
