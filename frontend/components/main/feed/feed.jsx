
import React from 'react';
import TopicIndex from './topic_index';
import UserIndex from './user_index';
import SingleQuestionContainer from '../../question/single_question_container'

const Feed = (props) => {
  // debugger
  // return <div></div>;
  return (
    <div className="feed">
      <SingleQuestionContainer />
    </div>
  );
}

export default Feed;


// currentUser={props.currentUser}
// 
// currentUser={props.currentUser}
// topic_id={props.topic_id}
// question_id={props.question_id} />
