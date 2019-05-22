import * as types from '../constants/ActionTypes';

export const goToPage = (page) => ({
  type: types.GO_TO_PAGE,
  payload: page
});
