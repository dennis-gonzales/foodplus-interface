import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/core';

import { useAppDispatch, useAppSelector } from '../../core/hooks/storeApi';
import { ScreenParamList } from '../../core/configs/routes';
import { addToCart } from '../../store/slices/cartSlice';

import ProductPage from '../components/organisms/ProductPage';
import {
  loadProducts,
  selectFilterableProducts,
  selectProduct,
  filterProducts,
  selectSearchTerm,
  setSearchTerm,
} from '../../store/slices/productsSlice';

type ListingsContainerProps = NavigationProp<ScreenParamList, any>;

const ListingsContainer: React.FC = () => {
  const navigation = useNavigation<ListingsContainerProps>();
  const dispatch = useAppDispatch();

  const products = useAppSelector(selectFilterableProducts);
  const searchTerm = useAppSelector(selectSearchTerm);



  React.useEffect(() => {
    dispatch(loadProducts({}));
  }, []);


  return (
    <View>
      <ProductPage
        products={products}
        searchTerm={searchTerm}
        onAddToCartPressed={product => dispatch(addToCart(product))}
        onProductPressed={product => {
          dispatch(selectProduct(product));
          navigation.navigate('ListingDetails');
        }}
        onSearchTermChanged={text => {
          dispatch(setSearchTerm(text));
          dispatch(filterProducts(text));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ListingsContainer;
