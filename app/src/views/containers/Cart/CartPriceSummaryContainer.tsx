import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import { ScreenParamList } from '../../../core/configs/routes';
import { useAppDispatch, useAppSelector } from '../../../core/hooks/storeApi';

import {
  selectCheckedProducts,
  selectCheckedProductsTotalPrice,
} from '../../../store/slices/cartSlice';

import CartPriceSummary from '../../components/molecules/CartPriceSummary';

type CartPriceSummaryContainerProps = NavigationProp<ScreenParamList, any>;

const CartPriceSummaryContainer: React.FC = () => {
  const navigation = useNavigation<CartPriceSummaryContainerProps>();
  const dispatch = useAppDispatch();

  const checkedProducts = useAppSelector(selectCheckedProducts);
  const selectedItemsPrice = useAppSelector(selectCheckedProductsTotalPrice);

  const handlePress = () => {
    if (checkedProducts.length > 0) {
      navigation.navigate('Checkout');
    } else {
      Toast.show({
        text1: 'Please select at least one item',
        type: 'info',
      });
    }
  };

  return (
    <CartPriceSummary
      totalPrice={selectedItemsPrice}
      onCheckoutPressed={handlePress}
    />
  );
};

const styles = StyleSheet.create({});

export default CartPriceSummaryContainer;
