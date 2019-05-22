import * as types from '../constants/ActionTypes';

const defaultState = {
  contacts: [{
    id: 'some-id-1',
    username: 'UserName',
    phone: '0979879876'
  }, {
    id: 'some-id-2',
    username: 'UserName 2',
    phone: '0979879877'
  }],
  pagination: {
    page: 1,
    totalPages: 5
  }
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case types.GO_TO_PAGE:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          page: payload
        }
      };
    default:
      return state;
  }
};
