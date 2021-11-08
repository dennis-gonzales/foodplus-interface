import React from 'react';
import { StyleSheet, } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { ScreenParamList } from '../../../src/core/configs/routes';

import { useAppDispatch, useAppSelector } from '../../../src/core/hooks/storeApi';
import { selectProduct } from '../../../src/store/slices/productsSlice';
import {
  decreaseQuantity,
  increaseQuantity,
  selectProducts,
  selectCheckedProducts,
  toggleStatus,
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
  
  const items = useAppSelector(selectProducts);
  const selectedItems = useAppSelector(selectCheckedProducts);

  const getTotalPrice = (): string => {
    return selectedItems.reduce((acc, curr) => acc + curr.price, 0).toFixed(2);
  };

  const handlePress = (item: CartItem) => {
    dispatch(selectProduct(item.product));
    navigation.navigate('ListingDetails');
  };

  if (items.length === 0) {
    return (
      <LottieContentView
        source={require('../../../assets/animations/empty-box.json')}
        bottomContent={<Title>No Items in Cart</Title>}
        lottieContainerStyle={styles.lottieContainer}
      />
    );
  }

  return (
    <>
      <CartList
        items={items}
        increaseQuantity={product => dispatch(increaseQuantity(product))}
        decreaseQuantity={product => dispatch(decreaseQuantity(product))}
        toggleStatus={item => dispatch(toggleStatus(item))}
        onItemPressed={handlePress}
      />

      <CartPriceSummary
        totalPrice={getTotalPrice()}
        onCheckoutPressed={() => {}}
      />
    </>
  );
};

const styles = StyleSheet.create({
  lottieContainer: {
    justifyContent: 'center',
  }
});

export default CartContainer;