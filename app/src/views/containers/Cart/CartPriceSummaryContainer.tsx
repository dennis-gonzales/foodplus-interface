import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { ScreenParamList } from '../../../core/configs/routes';
import { useAppDispatch, useAppSelector } from '../../../core/hooks/storeApi';

import {
  selectCheckedProductsTotalPrice,
} from '../../../store/slices/cartSlice';

import CartPriceSummary from '../../components/molecules/CartPriceSummary';

type CartPriceSummaryContainerProps = NavigationProp<ScreenParamList, any>;

const CartPriceSummaryContainer: React.FC = () => {
  const navigation = useNavigation<CartPriceSummaryContainerProps>();
  const dispatch = useAppDispatch();

  const selectedItemsPrice = useAppSelector(selectCheckedProductsTotalPrice);

  return (
    <CartPriceSummary
        totalPrice={selectedItemsPrice}
        onCheckoutPressed={() => navigation.navigate('Checkout')}
      />
  );
};

const styles = StyleSheet.create({});

export default CartPriceSummaryContainer;
