import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ScreenParamList } from '../../core/configs/routes';
import CheckoutShippingAddressContainer from '../containers/Checkout/CheckoutShippingAddressContainer';
import CheckoutCartListContainer from '../containers/Checkout/CheckoutCartListContainer';
import CheckoutActionContainer from '../containers/Checkout/CheckoutActionContainer';

interface CheckoutScreenProps {
  route: RouteProp<ScreenParamList, 'Checkout'>;
  navigation: NativeStackNavigationProp<ScreenParamList, 'Checkout'>;
}

const CheckoutScreen: React.FC<CheckoutScreenProps> = ({ route, navigation }) => {
  return (
    <>
      <CheckoutShippingAddressContainer />
      <CheckoutCartListContainer />
      <CheckoutActionContainer />
    </>
  );
};

const styles = StyleSheet.create({});

export default CheckoutScreen;