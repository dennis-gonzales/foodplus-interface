import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { ScreenParamList, NavigatorParamList } from '../../core/configs/routes';

import BottomTabsNavigator from './BottomTabsNavigator';
import CheckoutScreen from '../screens/CheckoutScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';

const MainNavigator: React.FC = () => {
  const Stack = createNativeStackNavigator<ScreenParamList & NavigatorParamList>();

  return (
    <Stack.Navigator
      initialRouteName="BottomTabs"
    >
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabsNavigator}
        options={{
          title: 'Food Plus',
        }}
      />

      <Stack.Screen
        name="ListingDetails"
        component={ListingDetailsScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Checkout"
        component={CheckoutScreen}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
