import { connect } from 'react-redux';
import Message from './message';
import { fetchMessage } from '../../actions/message_actions';


const mapStateToProps = ({message}) => {
  return ({
    message: message
  });
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMessage: (id) => dispatch(fetchMessage(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message)
