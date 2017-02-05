import { connect } from 'react-redux';
import SideBar from './sidebar';
import { fetchTopics } from '../../../actions/topic_actions';


const mapStateToProps = ({ session }) => {
  return ({
    currentUser: session.currentUser
  });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchTopics: () => dispatch(fetchTopics())
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar)
