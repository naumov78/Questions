import React from 'react';
import { connect } from 'react-redux';
import SingleQuestion from './single_question';
import { fetchSingeleQuestion } from '../../actions/question_actions';
// import { fetchTopics } from '../../actions/topic_actions';


const mapStateToProps = ({question}) => {
  return ({
    body: question.body
  })
}


const mapDispatchToProps = (dispatch) => {
  debugger
  return ({
    fetchSingleQuestion: (id) => {
      debugger
      return (dispatch(fetchSingleQuestion(id)) );
    }
  });
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleQuestion);
