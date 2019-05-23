import * as types from '../constants/ActionTypes';
import { getContacts, getContactHistory, getFilteredContacts, postCall } from '../utils';

export const retrieveContacts = (data) => ({
  type: types.GET_CONTACTS_SUCCESS,
  payload: data
});
export const getContactsFail = (data) => ({
  type: types.GET_CONTACTS_FAIL,
  payload: data
});
export const getHistorySuccess = (data) => ({
  type: types.GET_CALL_HISTORY_SUCCESS,
  payload: data
});
export const getHistoryFail = (data) => ({
  type: types.GET_CALL_HISTORY_FAIL,
  payload: data
});
export const makeCallSuccess = (data) => ({
  type: types.MAKE_CALL_SUCCESS,
  payload: data
});
export const makeCallFail = (data) => ({
  type: types.MAKE_CALL_FAIL,
  payload: data
});
export const openModal = (data) => ({
  type: types.OPEN_MODAL,
  payload: data
});
export const closeModal = () => ({
  type: types.CLOSE_MODAL
});
export const openDropdown = (data) => ({
  type: types.OPEN_DROPDOWN,
  payload: data
});
export const closeDropdown = () => ({
  type: types.CLOSE_DROPDOWN
});

export const fetchContacts = (page = 1) => {
  return (dispatch) => {
    return getContacts(page)
      .then(response => {
        dispatch(retrieveContacts({
          contacts: response.data,
          totalItems: parseInt(response.headers['x-total-count']),
          page
        }));
      })
      .catch(error => {
        getContactsFail(error);
      });
  };
};

export const searchContacts = (query) => {
  // reset search
  if (!query) {
    return fetchContacts();
  }

  return (dispatch) => {
    return getFilteredContacts(query)
      .then(response => {
        dispatch(retrieveContacts({
          contacts: response.data,
          totalItems: 1,
          page: 1
        }));
      })
      .catch(error => {
        getContactsFail(error);
      });
  };
};

export const fetchHistory = (id) => {
  return (dispatch) => {
    return getContactHistory(id)
      .then(response => {
        dispatch(getHistorySuccess(response.data));
      })
      .catch(error => {
        getHistoryFail(error);
      });
  };
};

export const makeCall = (data) => {
  return (dispatch) => {
    return postCall(data)
      .then(response => {
        dispatch(makeCallSuccess(response.data));
      })
      .catch(error => {
        makeCallFail(error);
      });
  };
};
