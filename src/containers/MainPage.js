import { connect } from 'react-redux';
import MainPage from '../components/MainPage';
import { getContacts, getPaging } from '../selectors';
import { bindActionCreators } from 'redux';
import { goToPage } from '../actions';

const mapStateToProps = state => ({
  contacts: getContacts(state),
  pagination: getPaging(state)
});

const mapDispatchToProps = dispatch => ({
  goToPage: bindActionCreators(goToPage, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
