import { connect } from 'react-redux';
import { getCryptoForGrid, getHeaderForGrid } from './../reducers/crypto';
import Grid from './../components/grid/grid';

function mapStateToProps(state) {
  return {
    gridData: getCryptoForGrid(state),
    gridHeader: getHeaderForGrid(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGridReady: (params) => {
      const api = params.api;

      api.sizeColumnsToFit();
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
