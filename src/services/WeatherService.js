import api from '@config/api';
import Config from 'react-native-config';

const WEATHER_EP = '/weather';

export const getCurrentWeather = cityName =>
  api.get(`${WEATHER_EP}?q=${cityName}&appid=${Config.WEATHER_API_KEY}`);
