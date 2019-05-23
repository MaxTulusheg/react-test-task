import { connect } from 'react-redux';
import { getModalInfo } from '../selectors';
import { bindActionCreators } from 'redux';
import { fetchContacts } from '../actions';
import Modal from '../components/Modal';

const mapStateToProps = state => ({
  isOpen: getModalInfo(state).isOpen
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: bindActionCreators(fetchContacts, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
