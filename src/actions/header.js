import { ACTIONS } from './types';

/**
 * Action creator for setting the selected option for pagination
 * @param {String} option | Selected Option
 * @returns {ThunkAction} Thunk action
 */
function selectedOption(option) {
  return (dispatch) => {
    dispatch(setSelectedOption(option));
  };
}

/**
 * Action creator for updating state with selected Pagination Value
 * @memberof Header#
 * @function
 * @name setSelectedOption
 * @param {String} option | Selected Option
 * @returns {Object} Action Object In form {type, payload}
 */
function setSelectedOption(option) {
  return {
    type: ACTIONS.PAGINATION.SET,
    payload: option,
  };
}

export {
  selectedOption,
};

