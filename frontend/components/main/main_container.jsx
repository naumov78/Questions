import React from 'react';
import { connect } from 'react-redux';
import Main from './main';

const mapStateToProps = ({ session }) => {
  return ({
    currentUser: session.currentUser
  });
};


export default connect(
  mapStateToProps
)(Main)
