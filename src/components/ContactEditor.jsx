import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


const ContactEditor = ({ isNew, match, openModal }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contactId = match.params.id;

  useEffect(() => {
    // getContactInfo(contactId);
  }, [contactId]);

  const editForm = (
    <form>
      <div className="form-group">
        <label htmlFor="nameInput">Name</label>
        <input
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
          id="nameInput"
          className="form-control"
          placeholder="Name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phoneInput">Password</label>
        <input
          type="tel"
          pattern="\+[0-9]{1,3} \([0-9]{3}\) [0-9]{3}-[0-9]{4}"
          value={phone}
          onChange={event => setPhone(event.target.value)}
          id="phoneInput"
          className="form-control"
          placeholder="Phone"
          required
        />
        <small className="form-text text-muted">Please, follow this pattern: +1 (234) 567-8910</small>
      </div>
      <button type="submit" className="btn btn-primary">Edit</button>
    </form>
  );

  return (
    <div className="mt-5 row">
      <div className="col">
        <div className="card">
          <div className="card-body">
            {editForm}
          </div>
        </div>
      </div>
    </div>
  );
};

ContactEditor.defaultProps = {
  isNew: false
};

ContactEditor.propTypes = {
  isNew: PropTypes.bool,
  contactInfo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  }),
  openModal: PropTypes.func.isRequired
};

export default ContactEditor;
