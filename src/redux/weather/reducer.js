import { createReducer, completeReducer, completeState, onReadValue } from 'redux-recompose';
import Immutable from 'seamless-immutable';

import { actions } from './actions';

const stateDescription = {
  currentWeather: null,
  lastsSearchs: []
};

export const initialState = completeState(stateDescription, ['lastsSearchs']);

const reducerDescription = {
  primaryActions: [actions.GET_CURRENT_WEATHER],
  override: {
    [actions.ADD_TO_LASTS_SEARCHS]: onReadValue(),
    [actions.REPLACE_CURRENT_WEATHER]: onReadValue()
  }
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));
