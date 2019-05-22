import React from 'react';
import PropTypes from 'prop-types';

const ContactListItem = ({ username, phone }) => (
	<li className="list-group-item list-group-item-action">
		<div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">{username}</h5>
			<button className="btn btn-secondary btn-sm" >...</button>
    </div>
    <small className="text-muted">{phone}</small>
	</li>
);

ContactListItem.propTypes = {
	username: PropTypes.string.isRequired
};

export default ContactListItem;
