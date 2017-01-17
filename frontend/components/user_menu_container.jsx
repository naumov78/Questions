import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import UserMenu from './user_menu';


const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserMenu);
