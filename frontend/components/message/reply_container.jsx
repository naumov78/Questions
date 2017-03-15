import { connect } from 'react-redux';
import Reply from './reply';
import { createMessage } from '../../actions/message_actions';


const mapStateToProps = ({message}) => {
  return ({
    message: message.message,
    errors: message.errors
  });
}

const mapDispatchToProps = (dispatch) => {
  return {
    createMessage: (message) => dispatch(createMessage(message))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reply)
