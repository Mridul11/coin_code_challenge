import { connect } from 'react-redux';
import { getSelectOptions } from './../reducers/crypto';
import Header from './../components/header/header';
import { selectedOption } from './../actions/header';
import { fetchCryptos } from './../actions/cryptos';

function mapStateToProps(state) {
  return {
    selectOptions: getSelectOptions(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onOptionSelection(event) {
      dispatch(selectedOption(event.target.value));
      dispatch(fetchCryptos());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
