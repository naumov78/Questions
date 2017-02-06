import React from 'react';
import HeaderAskForm from './header_ask_form';
import { updateAskForm } from '../actions/question_actions';
import { connect } from 'react-redux'



const mapDispatchToProps = (dispatch) => {
  return ({
  updateAskForm: (askForm) => dispatch(updateAskForm(askForm))
  })
}


export default connect(
  null,
  mapDispatchToProps
)(HeaderAskForm);
