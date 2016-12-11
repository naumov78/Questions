import React from 'react';
import Header from './header';
import { connect } from 'react-redux'


const mapStateToProps = ({ session }) => {
  // debugger
  return ({
    currentUser: session.currentUser
  });
}

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps
)(Header);
