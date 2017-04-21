import { connect } from 'react-redux';
import Inbox from './inbox';
import { changeMessage, createMessage } from '../../../actions/message_actions';



const mapStateToProps = ({session, message}) => {
  return ({
    currentUser: session.currentUser,
    message: message
  });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    createMessage: (message) => dispatch(createMessage(message)),
    changeMessage: (id, parameter) => dispatch(changeMessage(id, parameter))
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inbox)
