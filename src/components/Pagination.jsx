import React from 'react';
import PropTypes from 'prop-types';


const Pagination = ({ page, totalPages, goToPage }) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <li key={i} className={`page-item ${i === page ? 'active' : ''}`}>
        <button onClick={() => goToPage(i)} className="page-link">{i}</button>
      </li>
    );
  }

  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className={`page-item ${page > 1 ? '' : 'disabled'}`}>
          <button onClick={() => goToPage(page - 1)} className="page-link">&laquo;</button>
        </li>
        {pages}
        <li className={`page-item ${page < totalPages ? '' : 'disabled'}`}>
          <button onClick={() => goToPage(page + 1)} className="page-link">&raquo;</button>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  goToPage: PropTypes.func.isRequired
};

export default Pagination;
