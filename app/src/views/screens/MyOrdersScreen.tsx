import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Title } from 'react-native-paper';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ScreenParamList } from '../../core/configs/routes';
import LottieContentView from '../common/LottieContentView';
import OrdersListContainer from '../containers/MyOrders/OrdersListContainer';

interface MyOrdersScreenProps {
  route: RouteProp<ScreenParamList, 'MyOrders'>;
  navigation: NativeStackNavigationProp<ScreenParamList, 'MyOrders'>;
}

const MyOrdersScreen: React.FC<MyOrdersScreenProps> = ({
  route,
  navigation,
}) => {
  return <OrdersListContainer />;
};

const styles = StyleSheet.create({});

export default MyOrdersScreen;
