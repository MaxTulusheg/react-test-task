import React, { useEffect } from 'react';
import Toolbar from '../containers/Toolbar';
import ContactList from './ContactList';
import Pagination from './Pagination';
import PropTypes from 'prop-types';
import ContactHistory from '../containers/ContactHistory';

const MainPage = ({ contacts, pagination, fetchContacts, showContactHistory, openDropdown, openModal, removeContact, history }) => {
  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return (
    <>
    <div className="row mt-5">
      <div className="col">
        <Toolbar />
      </div>
    </div>
    <div className="row mt-2 mb-3">
      <div className="col">
        {contacts && contacts.length
          ? <ContactList
              contacts={contacts}
              showContactHistory={showContactHistory}
              openDropdown={openDropdown}
              openModal={openModal}
              removeContact={removeContact}
              history={history}
            />
          : <h4 className="text-center">No Data</h4>
        }
      </div>
      <div className="col-4">
        <ContactHistory />
      </div>
    </div>
    <div className="row">
      <div className="col">
        {pagination && pagination.totalPages > 1
          && <Pagination {...pagination} goToPage={fetchContacts} />}
      </div>
    </div>
    </>
  );
}

MainPage.propTypes = {
  contacts: PropTypes.array.isRequired,
  pagination: PropTypes.shape({
    totalPages: PropTypes.number.isRequired
  }).isRequired,
  fetchContacts: PropTypes.func.isRequired,
  showContactHistory: PropTypes.func.isRequired,
  openDropdown: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  removeContact: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default MainPage;
