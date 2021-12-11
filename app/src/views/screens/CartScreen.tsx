import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Title } from 'react-native-paper';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ScreenParamList } from '../../core/configs/routes';
import { useAppSelector } from '../../core/hooks/storeApi';

import { selectCartProducts } from '../../store/slices/cartSlice';

import LottieContentView from '../common/LottieContentView';
import CartListContainer from '../containers/Cart/CartListContainer';
import CartPriceSummaryContainer from '../containers/Cart/CartPriceSummaryContainer';

interface CartScreenProps {
  route: RouteProp<ScreenParamList, 'Cart'>;
  navigation: NativeStackNavigationProp<ScreenParamList, 'Cart'>;
}

const CartScreen: React.FC<CartScreenProps> = ({ route, navigation }) => {

  const items = useAppSelector(selectCartProducts);

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
              style={styles.button}
              contentStyle={{
                paddingVertical: 5,
              }}
              onPress={() => navigation.navigate('Merchants')}
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
      <CartListContainer />
      <CartPriceSummaryContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  button: {
    borderRadius: 20,
  },
  lottieContainer: {
    justifyContent: 'center',
  },
  marginBottom: {
    marginBottom: 20,
  },
});

export default CartScreen;
