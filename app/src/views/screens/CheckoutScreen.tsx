import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ScreenParamList } from '../../core/configs/routes';
import SummaryContainer from '../containers/Checkout/SummaryContainer';

interface CheckoutScreenProps {
  route: RouteProp<ScreenParamList, 'Checkout'>;
  navigation: NativeStackNavigationProp<ScreenParamList, 'Checkout'>;
}

const CheckoutScreen: React.FC<CheckoutScreenProps> = ({ route, navigation }) => {
  return <SummaryContainer />;
};

export default CheckoutScreen;