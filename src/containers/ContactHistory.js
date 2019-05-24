import { connect } from 'react-redux';
import ContactHistory from '../components/ContactHistory';
import { getChosenContactId, getCallHistory, getHistoryId } from '../selectors';
import { bindActionCreators } from 'redux';
import { makeCall } from '../actions';

const mapStateToProps = state => ({
  id: getHistoryId(state),
  contact_id: getChosenContactId(state),
  calls: getCallHistory(state)
});

const mapDispatchToProps = dispatch => ({
  makeCall: bindActionCreators(makeCall, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactHistory);
