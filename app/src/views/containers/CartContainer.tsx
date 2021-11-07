import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import {
  Avatar,
  Button,
  IconButton,
  List,
  Subheading,
  Title,
} from 'react-native-paper';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { ScreenParamList } from '../../../src/core/configs/routes';
import { appTheme } from '../../../src/core/configs/theme';
import Product from '../../../src/core/interfaces/Product';

import { useAppDispatch, useAppSelector } from '../../../src/core/hooks/storeApi';
import { selectProduct } from '../../../src/store/slices/productsSlice';
import {
  decreaseQuantity,
  selectProductsFromCart,
} from '../../../src/store/slices/cartSlice';

type CartContainerProps = NavigationProp<ScreenParamList, any>;

const CartContainer: React.FC = () => {
  const navigation = useNavigation<CartContainerProps>();
  const dispatch = useAppDispatch();
  
  const cart = useAppSelector(state => selectProductsFromCart(state));

  const getTotalPrice = (): string => {
    return cart.reduce((acc, curr) => acc + curr.price, 0).toFixed(2);
  };

  const handlePress = (product: Product) => {
    dispatch(selectProduct(product));
    navigation.navigate('ListingDetails');
  };

  const renderEmptyCart = () => (
    <View style={styles.centerFullyAligned}>
      <Title
        style={{
          textAlign: 'center',
        }}
      >
        No items in cart
      </Title>
    </View>
  );;

  const renderCartDetails = () => (
    <>
      <View style={styles.cartDetailsContainer}>
        <FlatList
          data={cart}
          keyExtractor={item => item.product.id.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item: cart }) => (
            <List.Item
              onPress={() => handlePress(cart.product)}
              title={`${cart.quantity > 0 && `${cart.quantity}* `}${
                cart.product.title
              }`}
              description={`$${cart.price}`}
              left={props => (
                <Avatar.Image {...props} source={{ uri: cart.product.image }} />
              )}
              right={props => (
                <IconButton
                  {...props}
                  icon="minus"
                  style={{
                    backgroundColor: appTheme.colors.primary,
                    borderRadius: 90,
                  }}
                  onPress={() => dispatch(decreaseQuantity(cart))}
                />
              )}
            />
          )}
        />
      </View>

      <View style={styles.footer}>
        <View style={styles.centerFullyAligned}>
          <Subheading>Total</Subheading>
          <Title>${getTotalPrice()}</Title>
        </View>

        <Button
          mode="contained"
          style={styles.checkoutButton}
          contentStyle={{
            paddingVertical: 10,
            paddingHorizontal: 15,
          }}
          onPress={() => {
            // TODO: navigation.navigate('OrderStatus')
          }}
        >
          Checkout
        </Button>
      </View>
    </>
  );

  return (
    <>
      {cart.length > 0 ? renderCartDetails() : renderEmptyCart()}
    </>
  );
};

const styles = StyleSheet.create({
  cartDetailsContainer: {
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  centerFullyAligned: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  checkoutButton: {
    borderRadius: 20,
    flex: 1,
    marginHorizontal: 20,
  },
  screen: {
    flex: 1,
    paddingBottom: 100,
  },
  footer: {
    alignItems: 'center',
    backgroundColor: appTheme.colors.background,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 100,
    left: 0,
    position: 'absolute',
    right: 0,
  },
});

export default CartContainer;