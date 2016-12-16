import { connect } from 'react-redux';
import { signup } from '../actions/session_actions';
import SignUpForm from './signup_form';


const mapStateToProps = ({ session }) => {
  return {
  loggedIn: Boolean(session.currentUser),
  errors: session.errors.signup,
  currentUser: session.currentUser
 };
};

const mapDispatchToProps = (dispatch) => ({
  signup: (user) => dispatch(signup(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
