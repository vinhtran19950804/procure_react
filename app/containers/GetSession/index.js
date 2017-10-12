/**
 *
 * GetSession
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectGetSession from './selectors';
import reducer from './reducer';
import saga from './saga';

import Session from '../../components/Session'

import { getCode } from '../../api'

export class GetSession extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  render() {
    return (
      <div>
        <Session {...this.props} />
      </div>
    );
  }
}

GetSession.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  getsession: makeSelectGetSession(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'getSession', reducer });
const withSaga = injectSaga({ key: 'getSession', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(GetSession);
