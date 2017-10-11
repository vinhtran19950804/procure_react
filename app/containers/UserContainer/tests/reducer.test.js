
import { fromJS } from 'immutable';
import userContainerReducer from '../reducer';

describe('userContainerReducer', () => {
  it('returns the initial state', () => {
    expect(userContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
