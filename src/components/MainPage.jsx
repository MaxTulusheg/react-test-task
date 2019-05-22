import React from 'react';
import Toolbar from './Toolbar';
import ContactList from './ContactList';
import Pagination from './Pagination';
import PropTypes from 'prop-types';

const MainPage = ({ contacts, pagination, goToPage }) => (
	<>
	<div className="row mt-5">
		<div className="col">
			<Toolbar />
		</div>
	</div>
	<div className="row mt-2 mb-3">
		<div className="col">
			{contacts && contacts.length
				? <ContactList contacts={contacts} />
				: 'No Data'
			}
		</div>
	</div>
	<div className="row">
		<div className="col">
			{pagination && pagination.totalPages > 1
				&& <Pagination {...pagination} goToPage={goToPage} />}
		</div>
	</div>
	</>
);

MainPage.propTypes = {
	contacts: PropTypes.array.isRequired,
	pagination: PropTypes.shape({
		totalPages: PropTypes.number.isRequired
	}).isRequired
};

export default MainPage;
