import { createTypes, completeTypes, withPostSuccess } from 'redux-recompose';
import * as WeatherService from '@services/WeatherService';

import { normalizeWeatherResponse } from './normalizers';

export const actions = createTypes(
  completeTypes(['GET_CURRENT_WEATHER'], ['ADD_TO_LASTS_SEARCHS', 'REPLACE_CURRENT_WEATHER']),
  '@@WEATHER'
);

const currentWeatherTarget = 'currentWeather';
const lastsSearchsTarget = 'lastsSearchs';

const privateAcitonCreators = {
  addToLastsSearchs: lastSearch => (dispatch, getState) => {
    const lastsSearchs = getState().weather[lastsSearchsTarget];
    let futureLastSearchs = [];
    if (lastsSearchs.some(search => search.name === lastSearch.name)) {
      futureLastSearchs = lastsSearchs;
    } else if (lastsSearchs.length < 5) futureLastSearchs = [...lastsSearchs, lastSearch];
    else futureLastSearchs = [...lastsSearchs.slice(1, 5), lastSearch];
    dispatch({ type: actions.ADD_TO_LASTS_SEARCHS, payload: futureLastSearchs, target: lastsSearchsTarget });
  }
};
export const actionCreators = {
  getCurrentWeather: cityName => ({
    type: actions.GET_CURRENT_WEATHER,
    target: currentWeatherTarget,
    service: WeatherService.getCurrentWeather,
    payload: cityName,
    successSelector: response => normalizeWeatherResponse(response.data),
    injections: [
      withPostSuccess((dispatch, response) => {
        dispatch(privateAcitonCreators.addToLastsSearchs(normalizeWeatherResponse(response.data)));
      })
    ]
  }),
  replaceCurrentWeather: item => ({
    type: actions.REPLACE_CURRENT_WEATHER,
    payload: item,
    target: currentWeatherTarget
  })
};
