import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { updateUser, fetchUser } from '../../actions/user_actions';


// const mapStateToProps = ({ session }) => {
//   // debugger
//   return {
//   loggedIn: Boolean(session.currentUser),
//   currentUser: session.currentUser,
//   errors: session.errors
// };
// };


const mapStateToProps = ({ session, user }) => {

  return ({
    currentUser: session.currentUser,
    errors: user.errors,
    topics: session.currentUser.topics
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
