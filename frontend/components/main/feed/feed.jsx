
import React from 'react';
import UserIndex from './user_index';
import SingleQuestionContainer from '../../question/single_question_container'

const Feed = (props) => {
  return (
    <div className="feed">
      <SingleQuestionContainer />
    </div>
  );
}

export default Feed;
