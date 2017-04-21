import React from 'react';
import Header from './header';
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
    user: state.user.user
  });
}

const mapDispatchToProps = (dispatch) => {

}


export default connect(
  mapStateToProps
)(Header);
