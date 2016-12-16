import { connect } from 'react-redux';
import Answers from './answers';
import { fetchAnswers } from '../../actions/answer_actions';


const mapStateToProps = ({answers}) => {
  return ({
    answers: answers
  });
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAnswers: (question_id) => dispatch(fetchAnswers(question_id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Answers)
