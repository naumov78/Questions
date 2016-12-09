import { connect } from 'react-redux';
import { login } from '../actions/session_actions';
import SessionFormNew from './session_form_new';


const mapStateToProps = ({ session }) => {
  // debugger

  return {
  loggedIn: Boolean(session.currentUser),
  errors: session.errors.login,
  currentUser: session.currentUser
};
};

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionFormNew);
