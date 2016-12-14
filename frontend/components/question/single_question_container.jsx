import React from 'react';
import { connect } from 'react-redux';
import SingleQuestion from './single_question';
import { fetchSingleQuestion } from '../../actions/question_actions';
// import { fetchTopics } from '../../actions/topic_actions';


const mapStateToProps = ({question}, ownProps) => {
  debugger
  return ({
    body: question.body
  })
}


const mapDispatchToProps = (dispatch) => {
  // debugger
  return ({
    fetchSingleQuestion: ({question_data}) => dispatch(fetchSingleQuestion({question_data}))
  });
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleQuestion);
