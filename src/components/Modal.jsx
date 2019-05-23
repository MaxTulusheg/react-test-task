import React from 'react';
// TODO: tbd
const Modal = ({ isOpen }) => {
  return (
    <>
    <div className="modal" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Some text</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">Ok</button>
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <div className={isOpen ? 'modal-backdrop fade show' : 'd-none'} />
    </>
  );
}

export default Modal;
