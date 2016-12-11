import { connect } from 'react-redux';
import TopicForm from './topic_form';
import { fetchTopics } from '../../actions/topic_actions';




const mapStateToProps = ({topics}) => {
  return { topics: topics.topics };
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchTopics: () => dispatch(fetchTopics())
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicForm)
