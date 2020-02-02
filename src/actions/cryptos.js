import { fetchCryptos as fetchCryptosApi } from './../services/api';
import { ACTIONS } from './types';
import { getSelectOptions } from './../reducers/crypto';

/**
 * Action creator for fetching list of markets from the server
 * @returns {ThunkAction} Thunk action
 */
export function fetchCryptos() {
  return (dispatch, getState) => {
    const { selected } = getSelectOptions(getState());

    fetchCryptosApi(selected)
      .then((cryptos) => dispatch({
        type: ACTIONS.FETCH.SUCCESS.CRYPTOS,
        payload: cryptos,
      }))
      .catch((error) => dispatch({
        type: ACTIONS.FETCH.ERROR.CRYPTOS,
        error,
      }));
  };
}
