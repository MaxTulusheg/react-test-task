import React from 'react';
import PropTypes from 'prop-types';


const ContactListItem = ({ id, name, phone, showContactHistory, openDropdown, openModal, removeContact, history }) => {
  const contextMenuItems = [{
    text: 'Edit',
    callback: () => {
      history.push(`/edit/${id}`);
    }
  }, {
    text: 'Delete',
    callback: () => {
      openModal({
        title: 'Confirm',
        content: `This action cannot be undone, are you sure you want to delete ${name}?`,
        actions: [{
          text: 'Delete',
          type: 'danger',
          callback: () => {
            removeContact(id);
          }
        }, {
          text: 'Cancel',
          type: 'secondary'
        }]
      });
    }
  }];
  const onOpenDropdown = event => {
    event.preventDefault();

    // even though it's a dropdown, it's more like custom context menu
    openDropdown({
      options: contextMenuItems,
      coords: {
        x: event.pageX,
        y: event.pageY
      }
    });
  }


  return (
    <li className="list-group-item list-group-item-action" onContextMenu={onOpenDropdown} onClick={() => showContactHistory(id)}>
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">
          {name}
        </h5>
      </div>
      <small className="text-muted">
        {phone}
      </small>
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  showContactHistory: PropTypes.func.isRequired,
  openDropdown: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  removeContact: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default ContactListItem;
