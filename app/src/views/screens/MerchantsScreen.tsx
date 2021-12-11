import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ScreenParamList } from '../../core/configs/routes';
import MerchantListContainer from '../containers/Merchants/MerchantListContainer';

interface MerchantsScreenProps {
  route: RouteProp<ScreenParamList, 'Merchants'>;
  navigation: NativeStackNavigationProp<ScreenParamList, 'Merchants'>;
}

const MerchantsScreen: React.FC<MerchantsScreenProps> = ({
  route,
  navigation,
}) => {
  return <MerchantListContainer />;
};

export default MerchantsScreen;
