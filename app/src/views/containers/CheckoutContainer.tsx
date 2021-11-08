import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Button, Title } from 'react-native-paper';

import { ScreenParamList } from '../../../src/core/configs/routes';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../src/core/hooks/storeApi';
import CartItem from '../../core/types/CartItem';

import { selectProduct } from '../../../src/store/slices/productsSlice';
import { selectCheckedProducts } from '../../../src/store/slices/cartSlice';

type CheckoutContainerProps = NavigationProp<ScreenParamList, any>;

const CheckoutContainer: React.FC = () => {
  const navigation = useNavigation<CheckoutContainerProps>();
  const dispatch = useAppDispatch();

  return (
    <>
      <Text>HELLO WORLD</Text>
    </>
  );
};

const styles = StyleSheet.create({});

export default CheckoutContainer;
