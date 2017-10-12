/**
*
* Session
*
*/

import React from 'react';
// import styled from 'styled-components';

import { checkSession } from '../../api';

class Session extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    const { sessionID } = props.match.params;
    const { checksessionidcontainer, checkSessionRequest, history } = props;
    this.state = {
      sessionID,
      checksessionidcontainer,
      checkSessionRequest,
      history
    }
  }
  componentDidMount() {
    const { checksessionidcontainer, checkSessionRequest, history, sessionID } = this.state;
    checkSessionRequest(sessionID)
  }
  render() {
    
    const { checkSessionRequest, history, sessionID } = this.state;
    // checkSessionRequest(sessionID)
    const { checksessionidcontainer } = this.props;
    if (checksessionidcontainer.data === sessionID) {
      localStorage.setItem('sessionID', sessionID)
      history.push(`/login/${sessionID}`)
    } else {
      return (
        <div>
          <h1>Error Session ID</h1>
        </div>
      );
    }
  }
}

Session.propTypes = {

};

export default Session;
