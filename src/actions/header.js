import { ACTIONS } from './types';

function selectedOption(option) {
  return (dispatch) => {
    dispatch(setSelectedOption(option));
  };
}

function setSelectedOption(option) {
  return {
    type: ACTIONS.PAGINATION.SET,
    payload: option,
  };
}

export {
  selectedOption,
};

