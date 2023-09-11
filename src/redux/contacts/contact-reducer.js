import { createReducer, combineReducers } from '@reduxjs/toolkit';
import actions from './contact-action';

const filter = createReducer('', {
  [actions.filterChange]: (_, { payload }) => payload,
});

export default combineReducers({
  filter,
});
