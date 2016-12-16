import { connect } from 'react-redux';
import TopicForm from './topic_form';
import { fetchTopics } from '../../actions/topic_actions';
import { createSubscribedTopic } from '../../actions/user_subscribed_topics_actions';
import { updateUser } from '../../actions/session_actions';


const mapStateToProps = ({topics, session}) => {
  return {
    topics: topics.topics,
    currentUser: session.currentUser
  };
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchTopics: () => dispatch(fetchTopics()),
    createSubscribedTopic: (topic) => dispatch(createSubscribedTopic(topic)),
    updateUser: (user, id) => {
      return dispatch(updateUser(user, id));
    }
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicForm)
