import { connect } from 'react-redux';
import MainPage from '../components/MainPage';
import { getContacts, getPaging } from '../selectors';
import { bindActionCreators } from 'redux';
import { fetchContacts, fetchHistory, openDropdown } from '../actions';

const mapStateToProps = state => ({
  contacts: getContacts(state),
  pagination: getPaging(state)
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: bindActionCreators(fetchContacts, dispatch),
  showContactHistory: bindActionCreators(fetchHistory, dispatch),
  openDropdown: bindActionCreators(openDropdown, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
