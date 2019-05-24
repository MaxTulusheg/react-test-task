import * as types from '../constants/ActionTypes';

const defaultState = {
  id: null,
  contact_id: null,
  calls: []
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case types.GET_CALL_HISTORY_SUCCESS:
      return {
        id: payload.id,
        contact_id: payload.contact_id,
        calls: payload.calls
      };
    case types.MAKE_CALL_SUCCESS:
      return {
        id: payload.id,
        contact_id: payload.contact_id,
        calls: payload.calls
      };
    default:
      return state;
  }
};
