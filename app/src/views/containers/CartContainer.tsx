import React from 'react';
import { StyleSheet, } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { ScreenParamList } from '../../../src/core/configs/routes';

import { useAppDispatch, useAppSelector } from '../../../src/core/hooks/storeApi';
import { selectProduct } from '../../../src/store/slices/productsSlice';
import {
  addToCart,
  decreaseQuantity,
  selectProductsFromCart,
} from '../../../src/store/slices/cartSlice';
import CartItem from '../../core/types/CartItem';
import CartList from '../components/organisms/CartList';
import CartPriceSummary from '../components/molecules/CartPriceSummary';
import LottieContentView from '../common/LottieContentView';
import { Title } from 'react-native-paper';

type CartContainerProps = NavigationProp<ScreenParamList, any>;

const CartContainer: React.FC = () => {
  const navigation = useNavigation<CartContainerProps>();
  const dispatch = useAppDispatch();
  
  const cart = useAppSelector(selectProductsFromCart);

  const getTotalPrice = (): string => {
    return cart.reduce((acc, curr) => acc + curr.price, 0).toFixed(2);
  };

  const handlePress = (item: CartItem) => {
    dispatch(selectProduct(item.product));
    navigation.navigate('ListingDetails');
  };

  if (cart.length === 0) {
    return (
      <LottieContentView
        source={require('../../../assets/animations/empty-box.json')}
        bottomContent={<Title>No Items in Cart</Title>}
      />
    );
  }

  return (
    <>
      <CartList
        items={cart}
        increaseQuantity={item => dispatch(addToCart(item))}
        decreaseQuantity={item => dispatch(decreaseQuantity(item))}
        onItemPressed={handlePress}
      />

      <CartPriceSummary
        totalPrice={getTotalPrice()}
        onCheckoutPressed={() => {}}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default CartContainer;