import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUser } from '../../actions/user_actions';
import { updateUser } from '../../actions/session_actions';


const mapStateToProps = ({ session, user }) => {

  return ({
    currentUser: session.currentUser,
    topics: session.currentUser? session.currentUser.topics : [],
    errors: user.errors
  });
};


const mapDispatchToProps = (dispatch) => {
  return ({
  updateUser: (user, id) => dispatch(updateUser(user, id)),
  fetchUser: (id) => dispatch(fetchUser(id))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
