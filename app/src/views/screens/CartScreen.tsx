import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Title } from 'react-native-paper';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ScreenParamList } from '../../core/configs/routes';
import { useAppSelector } from '../../core/hooks/storeApi';

import { selectProducts } from '../../store/slices/cartSlice';

import LottieContentView from '../common/LottieContentView';
import CartActionContainer from '../containers/Cart/CartActionContainer';
import CartListContainer from '../containers/Cart/CartListContainer';
import CartPriceSummaryContainer from '../containers/Cart/CartPriceSummaryContainer';

interface CartScreenProps {
  route: RouteProp<ScreenParamList, 'Cart'>;
  navigation: NativeStackNavigationProp<ScreenParamList, 'Cart'>;
}

const CartScreen: React.FC<CartScreenProps> = ({ route, navigation }) => {

  const items = useAppSelector(selectProducts);

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
    <View style={styles.root}>
      <CartActionContainer />
      <CartListContainer />
      <CartPriceSummaryContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: 10,
    flex: 1,
  },
  lottieContainer: {
    justifyContent: 'center',
  },
  marginBottom: {
    marginBottom: 20,
  },
});

export default CartScreen;
