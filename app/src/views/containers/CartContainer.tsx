import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Button, Title } from 'react-native-paper';

import { ScreenParamList } from '../../../src/core/configs/routes';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../src/core/hooks/storeApi';
import CartItem from '../../core/types/CartItem';

import { selectProduct } from '../../../src/store/slices/productsSlice';
import {
  decreaseQuantity,
  increaseQuantity,
  selectProducts,
  toggleAllStatus,
  toggleProductStatus,
  selectAllStatus,
  clearCart,
  selectCheckedProductsTotalPrice,
} from '../../../src/store/slices/cartSlice';

import LottieContentView from '../common/LottieContentView';
import CartList from '../components/organisms/CartList';
import CartPriceSummary from '../components/molecules/CartPriceSummary';
import CartListAction from '../components/molecules/CartListAction';

type CartContainerProps = NavigationProp<ScreenParamList, any>;

const CartContainer: React.FC = () => {
  const navigation = useNavigation<CartContainerProps>();
  const dispatch = useAppDispatch();

  const items = useAppSelector(selectProducts);
  const allStatus = useAppSelector(selectAllStatus);
  const selectedItemsPrice = useAppSelector(selectCheckedProductsTotalPrice);

  const handlePress = (item: CartItem) => {
    dispatch(selectProduct(item.product));
    navigation.navigate('ListingDetails');
  };

  if (items.length === 0) {
    return (
      <LottieContentView
        source={require('../../../assets/animations/empty-box.json')}
        bottomContent={
          <>
            <Title style={styles.marginBottom}>No Items in Cart</Title>
            <Button
              icon="cart"
              mode="contained"
              onPress={() => navigation.navigate('Listings')}
            >
              Shop Now
            </Button>
          </>
        }
        lottieContainerStyle={styles.lottieContainer}
      />
    );
  }

  return (
    <View style={styles.container}>
      <CartListAction
        status={allStatus}
        toggleStatus={() => dispatch(toggleAllStatus())}
        onClearPressed={() => dispatch(clearCart())}
      />

      <CartList
        items={items}
        increaseQuantity={product => dispatch(increaseQuantity(product))}
        decreaseQuantity={product => dispatch(decreaseQuantity(product))}
        toggleStatus={item => dispatch(toggleProductStatus(item))}
        onItemPressed={handlePress}
      />

      <CartPriceSummary
        totalPrice={selectedItemsPrice}
        onCheckoutPressed={() => navigation.navigate('Checkout')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  lottieContainer: {
    justifyContent: 'center',
  },
  marginBottom: {
    marginBottom: 20,
  },
});

export default CartContainer;
