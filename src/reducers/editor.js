import * as types from '../constants/ActionTypes';

const defaultState = {
  id: null,
  name: '',
  phone: ''
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case types.GET_CONTACT_INFO_SUCCESS:
      return {
        ...state,
        ...payload
      };
    case types.CLEAR_CONTACT_INFO:
      return {
        ...defaultState
      };
    case types.CHANGE_CONTACT_NAME:
      return {
        ...state,
        name: payload
      };
    case types.CHANGE_CONTACT_PHONE:
      return {
        ...state,
        phone: payload
      };
    default:
      return state;
  }
};
