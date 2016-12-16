import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import UserReducer from './user_reducer';
import TopicsReducer from './topics_reducer';
import TopicReducer from './topic_reducer';
import QuestionReducer from './question_reducer';
import SubscribedTopicsReducer from './user_subscribed_topics_reducer';
import AnswersReducer from './answers_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  topics: TopicsReducer,
  question: QuestionReducer,
  answers: AnswersReducer,
  topic: TopicReducer,
  subscribedTopics: SubscribedTopicsReducer,
  user: UserReducer
})


export default rootReducer;
