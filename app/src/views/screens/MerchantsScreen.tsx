import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ScreenParamList } from '../../core/configs/routes';
import { Button } from 'react-native-paper';

interface MerchantsScreenProps {
  route: RouteProp<ScreenParamList, 'Merchants'>;
  navigation: NativeStackNavigationProp<ScreenParamList, 'Merchants'>;
}

const MerchantsScreen: React.FC<MerchantsScreenProps> = ({
  route,
  navigation,
}) => {
  return (
    <>
      <Button
        onPress={() => navigation.navigate('MerchantListings')}
        mode="contained"
      >
        GO TO MERCHANTS LIST - EXAMPLE
      </Button>
    </>
  );
};

export default MerchantsScreen;
