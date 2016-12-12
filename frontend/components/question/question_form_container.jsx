import React from 'react';
import { connect } from 'react-redux';
import QuestionForm from './question_form';
import { createQuestion } from '../../actions/question_actions';
import { fetchTopics } from '../../actions/topic_actions';

const mapStateToProps = ({topics}) => {
  return ({
    topics: topics.topics
  })
}


const mapDispatchToProps = (dispatch) => {
  return ({
    createQuestion: (question) => dispatch(createQuestion(question)),
    fetchTopics: () => dispatch(fetchTopics())
  });
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionForm);
