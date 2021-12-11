import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { ScreenParamList } from '../../../core/configs/routes';
import { useAppDispatch, useAppSelector } from '../../../core/hooks/storeApi';
import CartItem from '../../../core/types/CartItem';

import {
  selectCartProducts,
} from '../../../store/slices/cartSlice';
import { selectProduct } from '../../../store/slices/productsSlice';

import CartSummaryList from '../../components/organisms/CartSummaryList';

type CheckoutCartListContainerProps = NavigationProp<ScreenParamList, any>;

const CheckoutCartListContainer: React.FC = () => {
  const navigation = useNavigation<CheckoutCartListContainerProps>();
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartProducts);

  const handlePress = (item: CartItem) => {
    dispatch(selectProduct(item.product));
    navigation.navigate('ListingDetails');
  };

  return (
    <CartSummaryList
      items={items}
      onItemPressed={handlePress}
    />
  );
};

const styles = StyleSheet.create({});

export default CheckoutCartListContainer;
