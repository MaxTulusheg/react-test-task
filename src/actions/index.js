import * as types from '../constants/ActionTypes';
import {
  getContacts,
  getContactHistory,
  getFilteredContacts,
  postCall,
  getContact,
  updateContact,
  createContact,
  createHistoryForContact,
  deleteContact,
  deleteHistory
} from '../utils';

export const fetchContactsSuccess = (data) => ({
  type: types.GET_CONTACTS_SUCCESS,
  payload: data
});

export const getHistorySuccess = (data) => ({
  type: types.GET_CALL_HISTORY_SUCCESS,
  payload: data
});
export const makeCallSuccess = (data) => ({
  type: types.MAKE_CALL_SUCCESS,
  payload: data
});
export const getContactSuccess = (data) => ({
  type: types.GET_CONTACT_INFO_SUCCESS,
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

export const changeName = (name) => ({
  type: types.CHANGE_CONTACT_NAME,
  payload: name
});
export const changePhone = (phone) => ({
  type: types.CHANGE_CONTACT_PHONE,
  payload: phone
});

export const clearContactInfo = () => ({
  type: types.CLEAR_CONTACT_INFO
});

export const fetchContacts = (page = 1) => {
  return (dispatch) => {
    return getContacts(page)
      .then(response => {
        dispatch(fetchContactsSuccess({
          contacts: response.data,
          totalItems: parseInt(response.headers['x-total-count']),
          page
        }));
      })
      .catch(() => {
        dispatch(openModal({
          title: 'Error',
          content: 'Cannot get your contact list',
          actions: [{
            type: 'danger',
            text: 'Ok'
          }]
        }));
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
        dispatch(fetchContactsSuccess({
          contacts: response.data,
          totalItems: 1,
          page: 1
        }));
      })
      .catch(() => {
        dispatch(openModal({
          title: 'Error',
          content: 'Cannot search contacts',
          actions: [{
            type: 'danger',
            text: 'Ok'
          }]
        }));
      });
  };
};

export const fetchHistory = (id) => {
  return (dispatch) => {
    return getContactHistory(id)
      .then(response => {
        dispatch(getHistorySuccess(response.data[0]));
      })
      .catch(() => {
        dispatch(openModal({
          title: 'Error',
          content: 'Cannot call history for contact',
          actions: [{
            type: 'danger',
            text: 'Ok'
          }]
        }));
      });
  };
};

export const makeCall = (data) => {
  return (dispatch) => {
    return postCall(data)
      .then(response => {
        dispatch(makeCallSuccess(response.data));
      })
      .catch(() => {
        dispatch(openModal({
          title: 'Error',
          content: 'Cannot make a call for this contact',
          actions: [{
            type: 'danger',
            text: 'Ok'
          }]
        }));
      });
  };
};

export const getContactInfo = (id) => {
  return (dispatch) => {
    return getContact(id)
      .then(response => {
        dispatch(getContactSuccess(response.data));
      })
      .catch(() => {
        dispatch(openModal({
          title: 'Error',
          content: 'Cannot get contact',
          actions: [{
            type: 'danger',
            text: 'Ok'
          }]
        }));
      });
  };
};

export const editContact = (id, data, navigate) => {
  return (dispatch) => {
    return updateContact(id, data)
      .then(() => {
        navigate('/');
      })
      .catch(() => {
        dispatch(openModal({
          title: 'Error',
          content: 'Cannot save changes for contact',
          actions: [{
            type: 'danger',
            text: 'Ok'
          }]
        }));
      });
  };
};

export const createContactHistory = (id) => {
  return (dispatch) => {
    return createHistoryForContact(id)
      .then(response => {
        dispatch(getHistorySuccess(response.data));
      })
      .catch(() => {
        dispatch(openModal({
          title: 'Error',
          content: 'Cannot create history for contact',
          actions: [{
            type: 'danger',
            text: 'Ok'
          }]
        }));
      });
  };
};


export const createNewContact = (data, navigate) => {
  return (dispatch) => {
    return createContact(data)
      .then(response => {
        dispatch(createContactHistory(response.data.id));
        navigate('/');
      })
      .catch(() => {
        dispatch(openModal({
          title: 'Error',
          content: 'Cannot create new contact',
          actions: [{
            type: 'danger',
            text: 'Ok'
          }]
        }));
      });
  };
};

export const removeContact = (id) => {
  return (dispatch) => {
    return deleteContact(id)
      .then(() => {
        deleteHistory(id);
        dispatch(fetchContacts());
      })
      .catch(() => {
        dispatch(openModal({
          title: 'Error',
          content: 'Cannot delete contact',
          actions: [{
            type: 'danger',
            text: 'Ok'
          }]
        }));
      });
  };
};
