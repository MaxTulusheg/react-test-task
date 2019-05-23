import { connect } from 'react-redux';
import ContactHistory from '../components/ContactHistory';
import { getChosenContactId, getCallHistory } from '../selectors';
import { bindActionCreators } from 'redux';
import { makeCall } from '../actions';

const mapStateToProps = state => ({
  id: getChosenContactId(state),
  calls: getCallHistory(state)
});

const mapDispatchToProps = dispatch => ({
  makeCall: bindActionCreators(makeCall, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactHistory);
