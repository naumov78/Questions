import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainerNew from './session_form_container_new';
import { AuthForm, IndexLogo } from './auth_form';
import UserProfileContainer from './user/user_profile_container';
import TopicFormContainer from './topics/topic_form_container';
import QuestionFormContainer from './question/question_form_container';
import TopicIndexContainer from './main/topic_index_container';
import SingleQuestionContainer from './question/single_question_container';

const Root = ({ store }) => {
const _ensureLogIn = (nextState, replace) => {
  const currentUser = store.getState().session.currentUser;
  if (!currentUser) {
    replace('/login');
  }
}

const _redirectIfLoggedIn = () => {
  const currentUser = store.getState().session.currentUser;
  if (currentUser) {
    replace('/');
  }
}

const redirectToQuestions = (topic_id) => {
  replace(`/topics/${topic_id}/questions`);
}
return (
    <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App } >
        <IndexRoute onEnter={_ensureLogIn}/>
        <Route path="/login" component={ AuthForm } />
        <Route path="/settopics" component={ TopicFormContainer } onEnter={_ensureLogIn}/>
        <Route path="/users/:id" component={ UserProfileContainer } onEnter={_ensureLogIn}/>
        <Route path="/users/:id/:inbox" component={ UserProfileContainer } onEnter={_ensureLogIn}/>
        <Route path="/topics/:topic_id/questions" component={ TopicIndexContainer } onEnter={_ensureLogIn} />
        <Route path="/topics/:topic_id/questions/:question_id" component={ SingleQuestionContainer } onEnter={_ensureLogIn} />
        <Route path="/createq" component={ QuestionFormContainer } onEnter={_ensureLogIn}/>
      </Route>
    </Router>
  </Provider>
  )
};

export default Root;
