import { connect } from 'react-redux';
import UserIndex from './user_index';
import { fetchUser } from '../../../actions/user_actions';
import { fetchSingleQuestion } from '../../../actions/question_actions';

const mapStateToProps = ({session}) => {
  return ({
    // questions: topic.questions,
    // watched_questions: topic.watched_questions,
    currentUser: session.currentUser
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchUser: id => dispatch(fetchUser(id)),
    fetchSingleQuestion: ({question_data}) => dispatch(fetchSingleQuestion({question_data}))
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserIndex)
