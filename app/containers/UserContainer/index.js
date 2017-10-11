/**
 *
 * UserContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectUserContainer from './selectors';

import reducer from './reducer';
import saga from './saga';

import User from '../../components/User';

export class UserContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <User {...this.props} />
    );
  }
}

UserContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  usercontainer: makeSelectUserContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'userContainer', reducer });
const withSaga = injectSaga({ key: 'userContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(UserContainer);
