import * as types from '../constants/ActionTypes';

const defaultState = {
  modal: {
    isOpen: false
  },
  dropdown: {
    isOpen: false,
    options: [],
    coords: {
      x: 0,
      y: 0
    }
  }
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case types.OPEN_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          isOpen: true
        }
      };
    case types.CLOSE_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          isOpen: false
        }
      };
    case types.OPEN_DROPDOWN:
      return {
        ...state,
        dropdown: {
          ...state.dropdown,
          isOpen: true,
          options: payload.options,
          coords: payload.coords
        }
      };
    case types.CLOSE_DROPDOWN:
      return {
        ...state,
        dropdown: {
          ...state.dropdown,
          isOpen: false
        }
      };
    default:
      return state;
  }
};
