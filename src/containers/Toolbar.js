import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Toolbar from '../components/Toolbar';
import { searchContacts } from '../actions';

const mapDispatchToProps = dispatch => ({
  searchContacts: bindActionCreators(searchContacts, dispatch)
});

export default connect(null, mapDispatchToProps)(withRouter(Toolbar));
