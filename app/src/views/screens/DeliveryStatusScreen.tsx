import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';

import { ScreenParamList } from '../../core/configs/routes';

import FatAppbarLayout from '../layouts/FatAppbarLayout';

interface CheckoutProps {
  route: RouteProp<ScreenParamList, 'DeliveryStatus'>;
  navigation: NavigationProp<ScreenParamList, 'DeliveryStatus'>;
}

const DeliveryStatusScreen: React.FC<CheckoutProps> = () => {
  return (
    <View style={styles.screen}>
      <FatAppbarLayout title="Delivery Status" />
    </View>
  );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    }
});

export default DeliveryStatusScreen;
