/**
*
* Session
*
*/

import React from 'react';
// import styled from 'styled-components';


class Session extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { sessionID } = this.props.match.params;
    localStorage.setItem('sessionID', sessionID);
    this.props.history.push(`/login/${sessionID}`);
    return (
      <div>
        <h1>Hello Session</h1>
      </div>
    );
  }
}

Session.propTypes = {

};

export default Session;
