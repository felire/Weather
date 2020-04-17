import React from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import styles from './styles';

const DELTA_MARGIN = 0.004;
function Location({ coordinate }) {
  const region = {
    latitude: coordinate.latitude,
    longitude: coordinate.longitude,
    latitudeDelta: DELTA_MARGIN,
    longitudeDelta: DELTA_MARGIN
  };
  return (
    <View style={styles.mapContainer}>
      <View style={[styles.map, styles.viewMapContainer]}>
        <MapView style={styles.map} scrollEnabled pitchEnabled region={region}>
          <Marker coordinate={coordinate} />
        </MapView>
      </View>
    </View>
  );
}

export default Location;
