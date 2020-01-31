import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const { Types, Creators } = createActions({
  setSearch: ['boolean'],
});

const INITIAL_STATE = Immutable({
  search: '',
});

const setSearch = (state = INITIAL_STATE, { search }) => state.merge({ search });

const HANDLER = {
  [Types.SET_SEARCH]: setSearch,
};


export default createReducer(INITIAL_STATE, HANDLER);
