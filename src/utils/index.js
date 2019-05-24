import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001'
});

export const getContacts = page => api.get('/contacts', {
  params: {
    _page: page,
    _limit: 5
  }
});

export const getFilteredContacts = query => api.get('/contacts', {
  params: {
    q: query
  }
});

export const getContactHistory = id => api.get(`/history?contact_id_like=${id}`);

export const postCall = data => api.put(`/history/${data.id}`, {
  contact_id: data.contact_id,
  calls: [
    ...data.calls,
    { date: data.date, incoming: data.incoming }
  ]
});

export const getContact = id => api.get(`/contacts/${id}`);

export const createContact = contactInfo => api.post('/contacts', contactInfo);

export const createHistoryForContact = id => api.post('/history', {
  contact_id: id,
  calls: []
});
export const deleteContact = id => api.delete(`/contacts/${id}`);

// Solution for json server
export const deleteHistory = contactId => api.get(`/history?contact_id_like=${contactId}`)
  .then(res => api.delete(`/history/${res.data[0].id}`));

export const updateContact = (id, contactInfo) => api.put(`/contacts/${id}`, contactInfo);
