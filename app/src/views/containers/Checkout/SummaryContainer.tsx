import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/core';

import { useAppDispatch, useAppSelector } from '../../../core/hooks/storeApi';
import { ScreenParamList } from '../../../core/configs/routes';
import CartItem from '../../../core/types/CartItem';

import { selectProduct } from '../../../store/slices/productsSlice';
import AddressCard from '../../components/molecules/AddressCard';
import { selectCheckedProducts } from '../../../store/slices/cartSlice';

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default SummaryContainer;
