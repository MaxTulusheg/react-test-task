import { connect } from 'react-redux';
import { getDropdownInfo } from '../selectors';
import { bindActionCreators } from 'redux';
import { closeDropdown } from '../actions';
import Dropdown from '../components/Dropdown';

const mapStateToProps = state => ({
  ...getDropdownInfo(state)
});

const mapDispatchToProps = dispatch => ({
  closeDropdown: bindActionCreators(closeDropdown, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
