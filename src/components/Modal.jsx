import React from 'react';
import PropTypes from 'prop-types';


const Modal = ({ isOpen, title, content, actions, closeModal }) => {
  const withClose = callback => () => {
    closeModal();
    callback && callback();
  };

  return (
    <>
    <div className={isOpen ? 'modal fade show d-block' : 'modal'} tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button onClick={closeModal} type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>{content}</p>
          </div>
          <div className="modal-footer">
            {actions.map(item => (
              <button key={item.text} onClick={withClose(item.callback)} type="button" className={`btn btn-${item.type || 'light'}`}>{item.text}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div onClick={closeModal} className={isOpen ? 'modal-backdrop fade show' : 'modal-backdrop d-none'} />
    </>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  actions: PropTypes.array.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default Modal;
