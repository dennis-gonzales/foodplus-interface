import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/core';

import { useAppDispatch, useAppSelector } from '../../../core/hooks/storeApi';
import { ScreenParamList } from '../../../core/configs/routes';
import CartItem from '../../../core/types/CartItem';

import { selectProduct } from '../../../store/slices/productsSlice';
import AddressCard from '../../components/molecules/AddressCard';
import { clearCart, selectCheckedProducts } from '../../../store/slices/cartSlice';

type SummaryContainerProps = NavigationProp<ScreenParamList, any>;

const SummaryContainer: React.FC = () => {
  const navigation = useNavigation<SummaryContainerProps>();
  const dispatch = useAppDispatch();

  const products = useAppSelector(selectCheckedProducts);

  const handlePress = (item: CartItem) => {
    dispatch(selectProduct(item.product));
    navigation.navigate('ListingDetails');
  };

  return (
    <View style={styles.container}>
      <AddressCard />

      <View style={styles.actions}>
        <Button
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          contentStyle={{
            paddingVertical: 5,
          }}
          mode="outlined"
        >
          BACK
        </Button>
        <Button
          style={styles.buyButton}
          onPress={() => {
            dispatch(clearCart());
            navigation.navigate('OrderSuccess');
          }}
          contentStyle={{
            paddingVertical: 5,
          }}
          mode="contained"
        >
          BUY
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  backButton: {
    flex: 1,
  },
  buyButton: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
});

export default SummaryContainer;
