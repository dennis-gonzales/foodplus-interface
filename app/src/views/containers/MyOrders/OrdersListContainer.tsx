import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/core';

import { useAppDispatch, useAppSelector } from '../../../core/hooks/storeApi';
import { ScreenParamList } from '../../../core/configs/routes';
import { loadOrders, selectOrders } from '../../../store/slices/ordersSlice';
import LottieContentView from '../../common/LottieContentView';
import { Button, Title } from 'react-native-paper';
import { selectProduct } from '../../../store/slices/productsSlice';
import { selectCartProducts } from '../../../store/slices/cartSlice';
import OrdersList from '../../components/organisms/OrdersList';
import Product from '../../../core/types/Product';

type OrdersListContainerProps = NavigationProp<ScreenParamList, any>;

const OrdersListContainer: React.FC = () => {
  const navigation = useNavigation<OrdersListContainerProps>();
  const dispatch = useAppDispatch();

  const cart = useAppSelector(selectCartProducts);
  const orders = useAppSelector(selectOrders);

  React.useEffect(() => {
    dispatch(loadOrders());
  }, []);

  if (orders.length === 0) {
    return (
      <LottieContentView
        source={require('../../../../assets/animations/empty-box.json')}
        bottomContent={
          <>
            <Title style={styles.marginBottom}>No Orders Found</Title>
            <Button
              icon="cart"
              mode="contained"
              onPress={() =>
                navigation.navigate(cart.length > 0 ? 'Cart' : 'Merchants')
              }
            >
              {cart.length > 0 ? 'Checkout Now' : 'Shop Now'}
            </Button>
          </>
        }
        lottieContainerStyle={styles.lottieContainer}
      />
    );
  }

  const handlePress = (product: Product) => {
    dispatch(selectProduct(product));
    navigation.navigate('ListingDetails');
  };

  return <OrdersList orders={orders} onItemPressed={handlePress} />;
};

const styles = StyleSheet.create({
  lottieContainer: {
    justifyContent: 'center',
  },
  marginBottom: {
    marginBottom: 20,
  },
});

export default OrdersListContainer;
