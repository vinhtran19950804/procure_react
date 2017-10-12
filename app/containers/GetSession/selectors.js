import { createSelector } from 'reselect';

/**
 * Direct selector to the getSession state domain
 */
const selectGetSessionDomain = (state) => state.get('getSession');

/**
 * Other specific selectors
 */


/**
 * Default selector used by GetSession
 */

const makeSelectGetSession = () => createSelector(
  selectGetSessionDomain,
  (substate) => substate.toJS()
);

export default makeSelectGetSession;
export {
  selectGetSessionDomain,
};
