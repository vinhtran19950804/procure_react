/**
*
* User
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

class User extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { status } = this.props.match.params;
    return (
      <div>
        <h1>
          Hello {status}
        </h1>
      </div>
    );
  }
}

User.propTypes = {
  status: PropTypes.string,
  match: PropTypes.object,

};

export default User;
