import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ScreenParamList } from '../../core/configs/routes';
import AddressCardContainer from '../containers/Checkout/AddressCardContainer';
import CheckoutCartListContainer from '../containers/Checkout/CheckoutCartListContainer';
import CheckoutActionContainer from '../containers/Checkout/ChekoutActionContainer';

interface CheckoutScreenProps {
  route: RouteProp<ScreenParamList, 'Checkout'>;
  navigation: NativeStackNavigationProp<ScreenParamList, 'Checkout'>;
}

const CheckoutScreen: React.FC<CheckoutScreenProps> = ({ route, navigation }) => {
  return (
    <>
      <AddressCardContainer />
      <CheckoutCartListContainer />
      <CheckoutActionContainer />
    </>
  );
};

const styles = StyleSheet.create({});

export default CheckoutScreen;