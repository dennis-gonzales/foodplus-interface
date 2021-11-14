import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreenParamList, NavigatorParamList } from '../../core/configs/routes';

import MerchantsScreen from '../screens/MerchantsScreen';
import MerchantListingsScreen from '../screens/MerchantListingsScreen';

const HomeNavigator: React.FC = () => {
  const Stack = createNativeStackNavigator<
    ScreenParamList & NavigatorParamList
  >();

  return (
    <Stack.Navigator
      initialRouteName="Merchants"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Merchants"
        component={MerchantsScreen} 
      />

      <Stack.Screen
        name="MerchantListings"
        component={MerchantListingsScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
