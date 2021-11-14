import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Subheading } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';

import { appTheme } from '../../core/configs/theme';

const OfflineNotice: React.FC = () => {

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="signal-off" size={24} color="black" />
      <Subheading>No Internet Connection</Subheading>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: appTheme.colors.background,
    height: 50,
    justifyContent: 'center',
    position: 'absolute',
    top: Constants.statusBarHeight,
    width: '100%',
    zIndex: 1,
  },
});

export default OfflineNotice;
