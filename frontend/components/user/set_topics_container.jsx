import { connect } from 'react-redux';
import SetTopics from './user_profile';
import { updateUser, fetchUser } from '../../actions/user_actions';


const mapStateToProps = ({ session }) => {

  return ({
    user
    currentUser: session.currentUser
  });
};


const mapDispatchToProps = (dispatch) => {
  // debugger
  return ({
  updateUser: (user) => dispatch(updateUser(user)),
  fetchUser: (id) => dispatch(fetchUser(id))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
