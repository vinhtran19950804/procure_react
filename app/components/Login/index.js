/**
*
* Login
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoading: false,
      errors: {
        username: '',
        password: '',
      },
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.loginRequest(this.state);
    const { status } = this.state;
    this.props.history.push(`/user/${status}`);
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    const { username, password, isLoading, errors } = this.state;
    const usernameWarning = errors.username ? (
      <div className="alert alert-danger">
        <strong>Warning</strong> {errors.username}
      </div>) : "";
    const passwordWarning = errors.password ? (
      <div className="alert alert-danger">
        <strong>Warning</strong> {errors.password}
      </div>) : "";
    return (
      <div className="row">
        <form onSubmit={this.onSubmit} className="col-md-4 col-md-offset-4">
          <h1>Login Procure</h1>
          <div className="form-group">
            <label className="control-label">
              User Name
            </label>
            <input
              value={username}
              onChange={this.onChange}
              type="text"
              name="username"
              className="form-control"
            />
            {usernameWarning}
          </div>

          <div className="form-group">
            <label className="control-label">
              Password
                    </label>
            <input
              value={password}
              onChange={this.onChange}
              type="password"
              name="password"
              className="form-control"
            />
            {passwordWarning}
          </div>

          <div className="radio">
            <label>
              <input type="radio" value="supplier" onChange={this.onChange} name="status" />
              Supplier
                    </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="customer" onChange={this.onChange} name="status" />
              Customer
                    </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="admin" onChange={this.onChange} name="status" />
              Admin
                    </label>
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-lg" disabled={isLoading}>
              Login
                    </button>
          </div>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  loginRequest: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  push: PropTypes.func,
};

export default Login;
