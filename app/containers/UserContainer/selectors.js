import { createSelector } from 'reselect';

/**
 * Direct selector to the userContainer state domain
 */
const selectUserContainerDomain = (state) => state.get('userContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by UserContainer
 */

const makeSelectUserContainer = () => createSelector(
  selectUserContainerDomain,
  (substate) => substate.toJS()
);

export default makeSelectUserContainer;
export {
  selectUserContainerDomain,
};
