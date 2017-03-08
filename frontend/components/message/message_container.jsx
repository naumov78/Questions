import { connect } from 'react-redux';
import Message from './message';
import { createMessage } from '../../actions/message_actions';


const mapStateToProps = ({message}) => {
  return ({
    message: message
  });
}

const mapDispatchToProps = (dispatch) => {
  return {
    createMessage: (id) => dispatch(createMessage(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message)
