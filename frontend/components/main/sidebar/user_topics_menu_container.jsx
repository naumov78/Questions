import { connect } from 'react-redux';
import UserTopicsMenu from './user_topic_menu';
import { fetchQuestions } from '../../../actions/question_actions';




const mapDispatchToProps = (dispatch) => {
  return ({
    fetchTopics: () => dispatch(fetchTopics())
  });
}

export default connect(
  mapDispatchToProps
)(UserTopicsMenu)
