import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ScreenParamList } from '../../core/configs/routes';
import CartContainer from '../containers/CartContainer';

interface CartScreenProps {
  route: RouteProp<ScreenParamList, 'Cart'>;
  navigation: NativeStackNavigationProp<ScreenParamList, 'Cart'>;
}

const CartScreen: React.FC<CartScreenProps> = ({ route, navigation }) => {
  return <CartContainer />;
};

export default CartScreen;