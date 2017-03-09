import { connect } from 'react-redux';
import Inbox from './inbox';
import { readMessage, createMessage } from '../../../actions/message_actions';



const mapStateToProps = ({user, message}) => {
  return ({
    currentUser: user.user,
    message: message
  });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    createMessage: (message) => dispatch(createMessage(message)),
    readMessage: (id) => dispatch(readMessage(id))
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inbox)
