import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import validator from 'validator';

import { useAppDispatch, useAppSelector } from '../../core/hooks/storeApi';
import { ScreenParamList } from '../../core/configs/routes';
import { addToCart } from '../../store/slices/cartSlice';

import ProductList from '../components/organisms/ProductList';
import {
  filterProducts,
  loadProducts,
  selectFilterableProducts,
  selectProduct,
  selectSearchTerm,
} from '../../store/slices/productsSlice';
import { selectActive } from '../../store/slices/categoriesSlice';

type ProductListContainerProps = NavigationProp<ScreenParamList, any>;

const ProductListContainer: React.FC = () => {
  const navigation = useNavigation<ProductListContainerProps>();
  const dispatch = useAppDispatch();

  const products = useAppSelector(selectFilterableProducts);
  const category = useAppSelector(selectActive);
  const searchTerm = useAppSelector(selectSearchTerm);

  React.useEffect(() => {
    const loadProductAndFilter = async () => {
      await dispatch(
        loadProducts({
          category,
        })
      );
      if (!validator.isEmpty(searchTerm)) {
        dispatch(filterProducts(searchTerm));
      }

    };

    loadProductAndFilter();
  }, [category]);

  return (
    <ProductList
      products={products}
      onProductPressed={product => {
        dispatch(selectProduct(product));
        navigation.navigate('ListingDetails');
      }}
      onAddToCartPressed={product => dispatch(addToCart(product))}
    />
  );
};

const styles = StyleSheet.create({});

export default ProductListContainer;
