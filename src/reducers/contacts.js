import * as types from '../constants/ActionTypes';

const defaultState = {
  contacts: [],
  pagination: {
    page: 1,
    totalPages: 1
  }
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case types.GET_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: payload.contacts,
        pagination: {
          page: payload.page,
          totalPages: Math.ceil(payload.totalItems / 5)
        }
      };
    default:
      return state;
  }
};
