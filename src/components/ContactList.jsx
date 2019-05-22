import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';

const ContactList = ({ contacts }) => (
	<ul className="list-group list-group-flush">
		{
			contacts.map(item => (
				<ContactListItem key={item.id} username={item.username} phone={item.phone} />
			))
		}
	</ul>
);

ContactList.propTypes = {
	contacts: PropTypes.array.isRequired
};

export default ContactList;
