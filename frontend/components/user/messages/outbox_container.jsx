import { connect } from 'react-redux';
import Outbox from './outbox';
import { changeMessage } from '../../../actions/message_actions';



const mapStateToProps = ({user, message}) => {
  return ({
    currentUser: user.user,
    message: message
  });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    changeMessage: (id, parameter) => dispatch(changeMessage(id, parameter))
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Outbox)
