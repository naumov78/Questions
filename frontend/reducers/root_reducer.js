import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import UserReducer from './user_reducer';
import TopicsReducer from './topics_reducer';
import TopicReducer from './topic_reducer';
import QuestionReducer from './question_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  user: UserReducer,
  topics: TopicsReducer,
  question: QuestionReducer,
  topic: TopicReducer
})


export default rootReducer;
