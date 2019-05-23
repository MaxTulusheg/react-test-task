import React from 'react';
import PropTypes from 'prop-types';
import ContactHistoryItem from './ContactHistoryItem';


const ContactHistory = ({ id, calls, makeCall }) => {
  const sortedCalls = [...calls]
    .sort((first, second) => new Date(second.date) - new Date(first.date));
  const listContent = !sortedCalls.length
    ? (<li className="list-group-item text-center">No calls</li>)
    : sortedCalls.map(item => (
      <ContactHistoryItem key={`${id}-${item.date}`} {...item} />
    ));
  const onCallClick = () => makeCall({ id, calls, date: new Date(), incoming: false });

  return (
    <div className={`card ${id ? '' : 'invisible'}`} style={{maxHeight: '400px', overflowY: 'auto'}}>
      <div className="card-body d-flex justify-content-center">
        <button onClick={onCallClick} type="button" className="w-75 btn btn-success">Call</button>
      </div>
      <ul className="list-group list-group-flush">
        {listContent}
      </ul>
    </div>
  );
};

ContactHistory.propTypes = {
  id: PropTypes.string,
  calls: PropTypes.array.isRequired,
  makeCall: PropTypes.func.isRequired
};

export default ContactHistory;
