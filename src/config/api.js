import { create } from 'apisauce';
import { CamelcaseSerializer, SnakecaseSerializer } from 'cerealizr';
import Config from 'react-native-config';
import Reactotron from 'reactotron-react-native';

const snakeCaseSerializer = new SnakecaseSerializer();
const camelCaseSerializer = new CamelcaseSerializer();

const baseURL = Config.WEATHER_API;

const api = create({
  baseURL,
  timeout: 5000
});

api.addMonitor(Reactotron.apisauce);

export const apiSetup = () => {
  api.addResponseTransform(response => {
    if (response.data) response.data = camelCaseSerializer.serialize(response.data);
  });
  api.addRequestTransform(request => {
    if (request.data) request.data = snakeCaseSerializer.serialize(request.data);
    if (request.params) request.params = snakeCaseSerializer.serialize(request.params);
  });
};

export default api;
