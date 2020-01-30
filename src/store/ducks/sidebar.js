import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  setShowing: ['boolean'],
});


const INITIAL_STATE = {
  showing: false,
};

const setShowing = (state = INITIAL_STATE, { showing }) => ({
  ...state,
  showing,
});

export default createReducer(INITIAL_STATE, {
  [Types.SET_SHOWING]: setShowing,
});
