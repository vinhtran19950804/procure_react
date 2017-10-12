
import { fromJS } from 'immutable';
import getSessionReducer from '../reducer';

describe('getSessionReducer', () => {
  it('returns the initial state', () => {
    expect(getSessionReducer(undefined, {})).toEqual(fromJS({}));
  });
});
