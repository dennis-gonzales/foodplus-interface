import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/core';

import { useAppDispatch, useAppSelector } from '../../core/hooks/storeApi';
import { ScreenParamList } from '../../core/configs/routes';
import {
  loadCategories,
  selectActive,
  selectCategories,
  updateCategory,
} from '../../store/slices/categoriesSlice';
import HorizontalCategoryList from '../components/organisms/HorizontalCategoryList';

type ProductListContainerProps = NavigationProp<ScreenParamList, any>;

const ProductListContainer: React.FC = () => {
  const navigation = useNavigation<ProductListContainerProps>();
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(loadCategories());
  }, []);

  const categories = useAppSelector(selectCategories);
  const category = useAppSelector(selectActive);

  return (
    <HorizontalCategoryList
      activeCategory={category}
      categories={categories}
      onCategoryPressed={category => dispatch(updateCategory(category))}
    />
  );
};

const styles = StyleSheet.create({});

export default ProductListContainer;
