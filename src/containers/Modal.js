import { connect } from 'react-redux';
import { getModalInfo } from '../selectors';
import { bindActionCreators } from 'redux';
import { fetchContacts, closeModal } from '../actions';
import Modal from '../components/Modal';

const mapStateToProps = state => ({
  ...getModalInfo(state)
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: bindActionCreators(fetchContacts, dispatch),
  closeModal: bindActionCreators(closeModal, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
