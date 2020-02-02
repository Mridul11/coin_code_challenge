import { ACTIONS } from '../actions/types';
import INITIAL_STATE from './initial-state';
import { formatDataForGrid, formatDataForSpChart } from './../utils/crypto';


function getCryptoForGrid(state) {
  return state.cryptoConfig && state.cryptoConfig.data ? formatDataForGrid(state.cryptoConfig.data) : null;
}


function getCryptoForSpChart(state) {
  return state.cryptoConfig && state.cryptoConfig.data ? formatDataForSpChart(state.cryptoConfig.data) : null;
}

function getHeaderForGrid(state) {
  return state.cryptoConfig.headers;
}


function getSelectOptions(state) {
  return state.cryptoConfig.pagination;
}

function cryptoConfig(state = INITIAL_STATE.cryptoConfig, action = {}) {
  let _state;

  switch (action.type) {
  case ACTIONS.FETCH.SUCCESS.CRYPTOS:
    _state = {
      ...state,
      data: [...action.payload],
    };
    break;
  case ACTIONS.PAGINATION.SET:
    _state = {
      ...state,
      pagination: {
        ...state.pagination,
        selected: action.payload,
      },
    };
    break;
  default:
    _state = state;
  }

  return _state;
}

export {
  getCryptoForGrid,
  getCryptoForSpChart,
  getHeaderForGrid,
  getSelectOptions,
  cryptoConfig,
};
