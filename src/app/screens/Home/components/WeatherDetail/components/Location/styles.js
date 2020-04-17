import { StyleSheet } from 'react-native';
import { alto } from '@constants/colors';
import { scale } from '@utils/scalingUtils';

const MAP_HEIGHT = scale(270);

export default StyleSheet.create({
  mapContainer: {
    flex: 1,
    width: '100%',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewMapContainer: {
    borderRadius: 5,
    borderColor: alto,
    borderWidth: 0.5,
    height: MAP_HEIGHT
  },
  map: {
    width: '100%',
    height: '100%',
    flex: 1
  }
});
