import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as weatherActions } from '@redux/weather/actions';
import { View, SafeAreaView } from 'react-native';
import { Formik } from 'formik';
import i18next from 'i18next';
import CustomButton from '@components/CustomButton';
import CustomText from '@components/CustomText';
import AnimatedCustomTextInput from '@components/CustomTextInput/AnimatedCustomTextInput';

import './i18n';
import WeatherDetail from './components/WeatherDetail';
import OldSearch from './components/OldSearch';
import { INITIAL_VALUES } from './constants';
import styles from './styles';

const renderItem = dispatch => item => {
  const handlePress = () => dispatch(weatherActions.replaceCurrentWeather(item));
  return <OldSearch name={item.name} onPress={handlePress} />;
};
const HomeContainer = () => {
  const dispatch = useDispatch();
  const handleSearch = ({ cityName }) => dispatch(weatherActions.getCurrentWeather(cityName));
  const currentWeather = useSelector(state => state.weather.currentWeather);
  const lastsSearchs = useSelector(state => state.weather.lastsSearchs);
  return (
    <SafeAreaView style={styles.container}>
      <Formik onSubmit={handleSearch} initialValues={INITIAL_VALUES}>
        {({ handleSubmit }) => (
          <View style={styles.formContainer}>
            <AnimatedCustomTextInput
              label={i18next.t('HOME:LOOK_FOR_YOUR_CITY')}
              name="cityName"
              style={styles.textInput}
            />
            <CustomButton
              onPress={handleSubmit}
              green
              title={i18next.t('HOME:SEARCH')}
              style={styles.mainButton}
            />
          </View>
        )}
      </Formik>
      {lastsSearchs.length > 0 && (
        <View style={styles.recordContainer}>
          <View style={styles.recordTextContainer}>
            <CustomText style={styles.recordStyle}>{i18next.t('HOME:RECORD')}</CustomText>
          </View>
          <View style={styles.lastsSearchs}>
            {[...lastsSearchs].reverse().map(search => renderItem(dispatch)(search))}
          </View>
        </View>
      )}
      {currentWeather && <WeatherDetail {...currentWeather} style={styles.detail} />}
    </SafeAreaView>
  );
};

export default memo(HomeContainer);
