import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';

const ContactList = ({ contacts, showContactHistory, openDropdown, history }) => (
  <ul className="list-group list-group-flush">
    {
      contacts.map(item => (
        <ContactListItem
          {...item}
          key={item.id}
          openDropdown={openDropdown}
          showContactHistory={showContactHistory}
          history={history}
        />
      ))
    }
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  showContactHistory: PropTypes.func.isRequired,
  openDropdown: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default ContactList;
