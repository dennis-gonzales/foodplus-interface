import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/core';

import { useAppDispatch, useAppSelector } from '../../core/hooks/storeApi';
import { ScreenParamList } from '../../core/configs/routes';
import { addToCart } from '../../store/slices/cartSlice';

import SafeView from '../components/darkMatter/SafeView';
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
    <SafeView>
      <ProductPage
        products={products}
        searchTerm={searchTerm}
        onProductPressed={product => {
          dispatch(selectProduct(product));
          navigation.navigate('ListingDetails');
        }}
        onAddToCartPressed={product => dispatch(addToCart(product))}
        onSearchTermChanged={text => dispatch(setSearchTerm(text))}
        onSearchPressed={text => dispatch(filterProducts(text))}
      />
    </SafeView>
  );
};

const styles = StyleSheet.create({});

export default ListingsContainer;
