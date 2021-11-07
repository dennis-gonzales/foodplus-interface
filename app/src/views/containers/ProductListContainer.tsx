import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import LottieView from 'lottie-react-native';
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


  if (products.length === 0) {
    return (
      <View style={styles.lottieContainer}>
        <LottieView
          style={styles.lottieView}
          source={require('../../../assets/animations/empty-box.json')}
          autoPlay
          loop
        />

        <Title>No Results Found</Title>
      </View>
    );
  }

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

const styles = StyleSheet.create({
  lottieContainer: {
    marginTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    display: 'flex',
    flex: 1,
  },
  lottieView: {
    height: 350,
  },
});

export default ProductListContainer;
