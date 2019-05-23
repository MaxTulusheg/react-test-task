import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001'
});

export const getContacts = (page) => api.get('/contacts', {
  params: {
    _page: page,
    _limit: 5
  }
});

export const getFilteredContacts = (query) => api.get('/contacts', {
  params: {
    q: query
  }
});

export const getContactHistory = id => api.get(`/history/${id}`);
export const postCall = data => api.put(`/history/${data.id}`, {
  calls: [
    ...data.calls,
    { date: data.date, incoming: data.incoming }
  ]
});

export const createContact = contactInfo => api.post('/contacts', contactInfo);
export const createHistoryForContact = contactInfo => api.post('/history', contactInfo);
