/**
 *
 * CheckSessionIdcontainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectCheckSessionIdcontainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import {
  checkSessionRequest
} from './actions';

import Session from '../../components/Session'

import { getCode } from '../../api'

export class CheckSessionIdcontainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log('session container')
    return (
      <Session {...this.props} />
    );
  }
}

CheckSessionIdcontainer.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  checksessionidcontainer: makeSelectCheckSessionIdcontainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    checkSessionRequest: (sessionID) => {dispatch(checkSessionRequest(sessionID))},
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'checkSessionIdcontainer', reducer });
const withSaga = injectSaga({ key: 'checkSessionIdcontainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CheckSessionIdcontainer);
