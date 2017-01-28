import React from 'react';
import FollowedQuestionsBlock from './followed_questions_block';


const RightPart = (props) => {
  return (
    <div className="right-part-container">
      <FollowedQuestionsBlock followees={props.followees} question_id={props.question_id}/>
    </div>
  );
}

export default RightPart;
