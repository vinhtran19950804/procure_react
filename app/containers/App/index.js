/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LoginContainer from 'containers/LoginContainer/index';
import UserContainer from 'containers/UserContainer/index';
import CheckSessionIDContainer from 'containers/CheckSessionIdcontainer';

import {
  getCode,
} from '../../api';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default class App extends React.Component {
  render() {
    const localStorageRef = localStorage.getItem('sessionID');
    const loginUrl = `/login/${localStorageRef}`;
    return (
      <AppWrapper>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/session/:sessionID" component={CheckSessionIDContainer} />
          <Route path="/features" component={FeaturePage} />
          <Route path={loginUrl} component={LoginContainer} />
          <Route path="/user/:status" component={UserContainer} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </AppWrapper>
    );
  }
}
