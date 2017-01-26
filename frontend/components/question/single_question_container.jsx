import React from 'react';
import { connect } from 'react-redux';
import SingleQuestion from './single_question';
import { fetchSingleQuestion, likeQuestion, dislikeQuestion, likeAnswer, dislikeAnswer, createComment, likeComment, dislikeComment } from '../../actions/question_actions';
import { createAnswer, fetchAnswers } from '../../actions/answer_actions';
import { fetchUser } from '../../actions/user_actions';


const mapStateToProps = ({question, session}) => {
  return ({
    question: question.question,
    answers: question.question.answers,
    views: question.question.views,
    rating: question.question.rating,
    currentUser: session.currentUser
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchSingleQuestion: ({question_data}) => dispatch(fetchSingleQuestion({question_data})),
    createAnswer: (answer, topic_id) => dispatch(createAnswer(answer, topic_id)),
    fetchAnswers: (topic_id, question_id) => dispatch(fetchAnswers(topic_id, question_id)),
    fetchUser: id => dispatch(fetchUser(id)),
    likeQuestion: (user_id, question_id) => dispatch(likeQuestion(user_id, question_id)),
    dislikeQuestion: (user_id, question_id, idx) => dispatch(dislikeQuestion(user_id, question_id, idx)),
    likeAnswer: (user_id, answer_id) => dispatch(likeAnswer(user_id, answer_id)),
    dislikeAnswer: (user_id, answer_id) => dispatch(dislikeAnswer(user_id, answer_id)),
    createComment: (new_comment) => dispatch(createComment(new_comment)),
    likeComment: (comment_id) => dispatch(likeComment(comment_id)),
    dislikeComment: (comment_id) => dispatch(dislikeComment(comment_id))
  });
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleQuestion);
