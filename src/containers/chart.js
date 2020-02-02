import { connect } from 'react-redux';
import { getCryptoForSpChart } from './../reducers/crypto';
import SpChartToolTip from '../components/chart/scatter-chart';

function mapStateToProps(state) {
  return {
    chartData: getCryptoForSpChart(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(SpChartToolTip);
