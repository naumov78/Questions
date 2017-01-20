import { connect } from 'react-redux';
import TopicIndex from './topic_index';
import { fetchQuestions, likeQuestion, dislikeQuestion } from '../../actions/question_actions';
import { fetchSingleTopic } from '../../actions/topic_actions';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = ({topic}) => {
  return ({
    questions: topic.questions
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchQuestions: topic_id => dispatch(fetchQuestions(topic_id)),
    fetchSingleTopic: topic_id => dispatch(fetchSingleTopic(topic_id)),
    fetchUser: id => dispatch(fetchUser(id)),
    likeQuestion: (user_id, question_id) => dispatch(likeQuestion(user_id, question_id)),
    dislikeQuestion: (user_id, question_id, idx) => dispatch(dislikeQuestion(user_id, question_id, idx))
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicIndex)
