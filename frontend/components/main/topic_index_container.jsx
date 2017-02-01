import { connect } from 'react-redux';
import TopicIndex from './topic_index';
import { fetchQuestions, likeQuestion, dislikeQuestion, createQuestion, fetchSingleQuestion } from '../../actions/question_actions';
import { fetchSingleTopic } from '../../actions/topic_actions';
import { fetchUser } from '../../actions/user_actions';
import { createAnswer } from '../../actions/answer_actions';

const mapStateToProps = ({topic, session}) => {
  return ({
    questions: topic.questions,
    watched_questions: topic.watched_questions,
    currentUser: session.currentUser
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchQuestions: topic_id => dispatch(fetchQuestions(topic_id)),
    fetchSingleTopic: topic_id => dispatch(fetchSingleTopic(topic_id)),
    createQuestion: question => dispatch(createQuestion(question)),
    fetchUser: id => dispatch(fetchUser(id)),
    likeQuestion: (user_id, question_id) => dispatch(likeQuestion(user_id, question_id)),
    dislikeQuestion: (user_id, question_id, idx) => dispatch(dislikeQuestion(user_id, question_id, idx)),
    createAnswer: (answer, topic_id) => dispatch(createAnswer(answer, topic_id)),
    fetchSingleQuestion: ({question_data}) => dispatch(fetchSingleQuestion({question_data}))
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicIndex)
