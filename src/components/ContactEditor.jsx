import React, { useEffect } from 'react';
import PropTypes from 'prop-types';


const ContactEditor = ({contact, match, history, openModal, getContactInfo, clearContactInfo, changeName, changePhone, createNewContact, editContact}) => {
  const id = match.params.id;

  useEffect(() => {
    if (id) {
      getContactInfo(id);
    }

    return () => clearContactInfo();
  }, [getContactInfo, clearContactInfo, id]);

  const onSubmit = (event) => {
    event.preventDefault();

    openModal({
      title: 'Confirm',
      content: `Please, confirm you want ta save contact: ${contact.name}`,
      actions: [{
        text: 'Confirm',
        type: 'success',
        callback: () => {
          if (id) {
            editContact(contact.id, {
              name: contact.name,
              phone: contact.phone
            }, history.push);
          } else {
            createNewContact({
              name: contact.name,
              phone: contact.phone
            }, history.push);
          }
        }
      }, {
        text: 'Cancel',
        type: 'secondary'
      }]
    });
  };

  return (
    <div className="mt-5 row">
      <div className="col">
        <div className="card">
          <div className="card-body">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="nameInput">Name</label>
                <input
                  type="text"
                  value={contact.name}
                  onChange={event => changeName(event.target.value)}
                  id="nameInput"
                  className="form-control"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneInput">Phone number</label>
                <input
                  type="text"
                  pattern="\+[0-9]{1,3} \([0-9]{3}\) [0-9]{3}-[0-9]{4}"
                  value={contact.phone}
                  onChange={event => changePhone(event.target.value)}
                  id="phoneInput"
                  className="form-control"
                  placeholder="Phone"
                  required
                />
                <small className="form-text text-muted">Please, follow this pattern: +1 (234) 567-8910</small>
              </div>
              <button onClick={() => history.push('/')} type="button" className="float-left btn btn-secondary">Cancel
              </button>
              <button type="submit"
                      className="float-right btn btn-success">
                {id ? 'Apply changes' : 'Create contact'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

ContactEditor.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  }).isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
  getContactInfo: PropTypes.func.isRequired,
  clearContactInfo: PropTypes.func.isRequired,
  changeName: PropTypes.func.isRequired,
  changePhone: PropTypes.func.isRequired,
  createNewContact: PropTypes.func.isRequired,
  editContact: PropTypes.func.isRequired
};

export default ContactEditor;
