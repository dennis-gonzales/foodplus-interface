import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ScreenParamList } from '../../core/configs/routes';
import CheckoutContainer from '../containers/CheckoutContainer';

interface CheckoutScreenProps {
  route: RouteProp<ScreenParamList, 'Checkout'>;
  navigation: NativeStackNavigationProp<ScreenParamList, 'Checkout'>;
}

const CheckoutScreen: React.FC<CheckoutScreenProps> = ({ route, navigation }) => {
  return <CheckoutContainer />;
};

export default CheckoutScreen;