import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { ScreenParamList } from '../../../core/configs/routes';
import { useAppDispatch, useAppSelector } from '../../../core/hooks/storeApi';
import CartItem from '../../../core/types/CartItem';

import {
  decreaseQuantity,
  increaseQuantity,
  selectCartProducts,
} from '../../../store/slices/cartSlice';
import { selectProduct } from '../../../store/slices/productsSlice';

import CartList from '../../components/organisms/CartList';

type CartListContainerProps = NavigationProp<ScreenParamList, any>;

const CartListContainer: React.FC = () => {
  const navigation = useNavigation<CartListContainerProps>();
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartProducts);

  const handlePress = (item: CartItem) => {
    dispatch(selectProduct(item.product));
    navigation.navigate('ListingDetails');
  };

  return (
    <CartList
      items={items}
      increaseQuantity={product => dispatch(increaseQuantity(product))}
      decreaseQuantity={product => dispatch(decreaseQuantity(product))}
      onItemPressed={handlePress}
    />
  );
};

const styles = StyleSheet.create({});

export default CartListContainer;
