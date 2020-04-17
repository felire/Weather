import React from 'react';
import CustomButton from '@components/CustomButton';

import styles from './styles';

function OldSearch({ name, onPress }) {
  return (
    <CustomButton title={name} onPress={onPress} style={styles.mainButton} textStyle={styles.textStyle} />
  );
}

export default OldSearch;
