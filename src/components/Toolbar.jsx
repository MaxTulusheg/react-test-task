import React from 'react';
import PropTypes from 'prop-types';


const Toolbar = ({ history, searchContacts }) => {
  const goToCreationPage = () => history.push('/new');
  const searchField = React.createRef();
  const submitContactSearch = (event) => {
    event.preventDefault();
    const query = searchField.current.value;

    searchContacts(query);
  }

  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <form className="form col" onSubmit={submitContactSearch}>
            <div className="input-group">
              <input ref={searchField} type="text" className="form-control" placeholder="Search..." />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary">Search</button>
              </div>
            </div>
          </form>
          <div className="col-1">
            <div className="input-group">
              <button onClick={goToCreationPage} className="form-control btn btn-primary">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Toolbar.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  searchContacts: PropTypes.func.isRequired
}

export default Toolbar;
