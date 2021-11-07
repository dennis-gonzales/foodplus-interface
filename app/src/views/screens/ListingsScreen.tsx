import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ScreenParamList } from '../../core/configs/routes';
import ProductSearchContainer from '../containers/ProductSearchContainer';
import HorizontalCategoryListContainer from '../containers/HorizontalCategoryListContainer';
import ProductListContainer from '../containers/ProductListContainer';

interface ListingsScreenProps {
  route: RouteProp<ScreenParamList, 'Listings'>;
  navigation: NativeStackNavigationProp<ScreenParamList, 'Listings'>;
}

const ListingsScreen: React.FC<ListingsScreenProps> = ({ route, navigation }) => {
  return (
    <>
      <ProductSearchContainer />
      <HorizontalCategoryListContainer />
      <ProductListContainer />
    </>
  );
};

export default ListingsScreen;