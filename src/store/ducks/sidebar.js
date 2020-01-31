import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const { Types, Creators } = createActions({
  setShowing: ['boolean'],
});

const INITIAL_STATE = Immutable({
  showing: false,
});

const setShowing = (state = INITIAL_STATE, { showing }) => state.merge({ showing });

const HANDLERS = {
  [Types.SET_SHOWING]: setShowing,
};

export default createReducer(INITIAL_STATE, HANDLERS);
