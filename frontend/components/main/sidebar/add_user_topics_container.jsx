import { connect } from 'react-redux';
import AddUserTopics from './add_user_topics';
import { fetchTopics } from '../../../actions/topic_actions';
import { updateUser } from '../../../actions/session_actions';
import { createSubscribedTopic } from '../../../actions/user_subscribed_topics_actions';

const mapStateToProps = ({ session }) => {
  return ({
    currentUser: session.currentUser
  });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchTopics: () => dispatch(fetchTopics()),
    createSubscribedTopic: (topic) => dispatch(createSubscribedTopic(topic)),
    updateUser: (user, id) =>  dispatch(updateUser(user, id))
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUserTopics)
