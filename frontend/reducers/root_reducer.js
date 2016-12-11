import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import UserReducer from './user_reducer';
import TopicReducer from './topics_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  user: UserReducer,
  topics: TopicReducer
})


export default rootReducer;
