import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  openModal,
  getContactInfo,
  changeName,
  changePhone,
  createNewContact,
  editContact,
  clearContactInfo
} from '../actions';
import ContactEditor from '../components/ContactEditor';
import { getContactData } from '../selectors';

const mapStateToProps = state => ({
  contact: getContactData(state)
});

const mapDispatchToProps = dispatch => ({
  openModal: bindActionCreators(openModal, dispatch),
  getContactInfo: bindActionCreators(getContactInfo, dispatch),
  clearContactInfo: bindActionCreators(clearContactInfo, dispatch),
  changeName: bindActionCreators(changeName, dispatch),
  changePhone: bindActionCreators(changePhone, dispatch),
  createNewContact: bindActionCreators(createNewContact, dispatch),
  editContact: bindActionCreators(editContact, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactEditor);
