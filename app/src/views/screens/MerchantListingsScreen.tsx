import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ScreenParamList } from '../../core/configs/routes';
import ProductSearchContainer from '../containers/MerchantListings/ProductSearchContainer';
import HorizontalCategoryListContainer from '../containers/MerchantListings/HorizontalCategoryListContainer';
import ProductListContainer from '../containers/MerchantListings/ProductListContainer';

interface MerchantListingsScreenProps {
  route: RouteProp<ScreenParamList, 'MerchantListings'>;
  navigation: NativeStackNavigationProp<ScreenParamList, 'MerchantListings'>;
}

const MerchantListingsScreen: React.FC<MerchantListingsScreenProps> = ({ route, navigation }) => {
  return (
    <>
      <ProductSearchContainer />
      <HorizontalCategoryListContainer />
      <ProductListContainer />
    </>
  );
};

export default MerchantListingsScreen;