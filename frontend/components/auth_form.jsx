import React from 'react';
import SignUpForm from './signup_form';
import SessionFormNew from './session_form_new';
import SignUpFormContainer from './signup_form_container';
import SessionFormNewContainer from './session_form_container_new';

export const IndexLogo = () => {
  return (
    <div className="index-logo-pair">
        <div className="logo">
          <h1>Questions</h1>
        </div>

        <div className="slogan">
          <h2>Answer to any question</h2>
        </div>
    </div>
  );
}

export const AuthForm = () => {
  return (
    <div className="index-page">
      <IndexLogo />
      <div className="auth-form">
        <SignUpFormContainer />
        <SessionFormNewContainer />
      </div>
    </div>
  );
}
