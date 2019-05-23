export const getContacts = state => state.contacts.contacts;
export const getPaging = state => state.contacts.pagination;

export const getChosenContactId = state => state.history.id;
export const getCallHistory = state => state.history.calls;

export const getModalInfo = state => state.general.modal;
export const getDropdownInfo = state => state.general.dropdown;
