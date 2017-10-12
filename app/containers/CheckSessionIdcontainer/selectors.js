import { createSelector } from 'reselect';

/**
 * Direct selector to the checkSessionIdcontainer state domain
 */
const selectCheckSessionIdcontainerDomain = (state) => state.get('checkSessionIdcontainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CheckSessionIdcontainer
 */

const makeSelectCheckSessionIdcontainer = () => createSelector(
  selectCheckSessionIdcontainerDomain,
  (substate) => ({ ...substate })
);

export default makeSelectCheckSessionIdcontainer;
export {
  selectCheckSessionIdcontainerDomain,
};
