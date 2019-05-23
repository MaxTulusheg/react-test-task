import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openModal } from '../actions';
import ContactEditor from '../components/ContactEditor';


const mapDispatchToProps = dispatch => ({
  openModal: bindActionCreators(openModal, dispatch)
});

export default connect(null, mapDispatchToProps)(ContactEditor);
