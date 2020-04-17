import React from 'react';
import { View } from 'react-native';
import i18next from 'i18next';
import CustomText from '@components/CustomText';

import Location from './components/Location';
import styles from './styles';

function WeatherDetail({ coordinate, name, temp, tempMin, tempMax, pressure, humidity, style }) {
  return (
    <View style={[styles.container, style]}>
      <CustomText xsmall>{i18next.t('HOME:NAME', { value: name })}</CustomText>
      <CustomText xsmall>{i18next.t('HOME:TEMP', { value: temp })}</CustomText>
      <CustomText xsmall>{i18next.t('HOME:TEMP_MIN', { value: tempMin })}</CustomText>
      <CustomText xsmall>{i18next.t('HOME:TEMP_MAX', { value: tempMax })}</CustomText>
      <CustomText xsmall>{i18next.t('HOME:PRESSURE', { value: pressure })}</CustomText>
      <CustomText xsmall>{i18next.t('HOME:HUMIDITY', { value: humidity })}</CustomText>
      <Location coordinate={coordinate} />
    </View>
  );
}

export default WeatherDetail;
