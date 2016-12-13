import { connect } from 'react-redux';
import TopicIndex from './topic_index';
import { fetchQuestions } from '../../../actions/question_actions';
import { fetchTopicss } from '../../../actions/topic_actions';




const mapStateToProps = ({topics}) => {
  return ({
    topics: topics.topics
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchQuestions: (topic_id) => dispatch(fetchQuestions(topic_id)),
    fetchTopics: () => dispatch(fetchTopics())
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicIndex)
