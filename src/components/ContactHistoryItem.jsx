import React from 'react';
import PropTypes from 'prop-types';

const ContactHistoryItem = ({ date, incoming }) => (
  <li className={`list-group-item flex-column align-items-start ${incoming ? '' : 'text-right'}`}>
    <h5 className="mb-1">
      {new Date(date).toLocaleString()}
    </h5>
    <small className="text-muted">
      {incoming ? 'Incoming' : 'Outgoing'}
    </small>
  </li>
);

ContactHistoryItem.propTypes = {
  date: PropTypes.string.isRequired,
  incoming: PropTypes.bool.isRequired
};

export default ContactHistoryItem;
