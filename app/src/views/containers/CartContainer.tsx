import React from 'react';
import { StyleSheet, } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Title } from 'react-native-paper';

import { ScreenParamList } from '../../../src/core/configs/routes';
import { useAppDispatch, useAppSelector } from '../../../src/core/hooks/storeApi';
import CartItem from '../../core/types/CartItem';

import { selectProduct } from '../../../src/store/slices/productsSlice';
import {
  decreaseQuantity,
  increaseQuantity,
  selectProducts,
  selectCheckedProducts,
  toggleAllStatus,
  toggleProductStatus,
  selectAllStatus,
} from '../../../src/store/slices/cartSlice';

import LottieContentView from '../common/LottieContentView';
import CartList from '../components/organisms/CartList';
import CartPriceSummary from '../components/molecules/CartPriceSummary';
import CartListItemCheckBox from '../components/molecules/CartListItemCheckBox';

type CartContainerProps = NavigationProp<ScreenParamList, any>;

const CartContainer: React.FC = () => {
  const navigation = useNavigation<CartContainerProps>();
  const dispatch = useAppDispatch();
  
  const items = useAppSelector(selectProducts);
  const selectedItems = useAppSelector(selectCheckedProducts);
  const allStatus = useAppSelector(selectAllStatus);

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
      <CartListItemCheckBox
        status={allStatus}
        toggleStatus={() => dispatch(toggleAllStatus())}
      />

      <CartList
        items={items}
        increaseQuantity={product => dispatch(increaseQuantity(product))}
        decreaseQuantity={product => dispatch(decreaseQuantity(product))}
        toggleStatus={item => dispatch(toggleProductStatus(item))}
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