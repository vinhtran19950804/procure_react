
import { fromJS } from 'immutable';
import checkSessionIdcontainerReducer from '../reducer';

describe('checkSessionIdcontainerReducer', () => {
  it('returns the initial state', () => {
    expect(checkSessionIdcontainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
