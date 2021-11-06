import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ScreenParamList, NavigatorParamList } from '../../core/configs/routes';

import ListingsNavigator from './ListingsNavigator';
import ListingDetails from '../containers/ListingDetailsContainer';

const MainNavigator: React.FC = () => {
  const Stack = createStackNavigator<ScreenParamList & NavigatorParamList>();

  return (
    <Stack.Navigator
      initialRouteName="ListingsNavigator"
      screenOptions={{
        headerTitleAlign: 'left',
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="ListingsNavigator"
        component={ListingsNavigator}
        options={{
          title: 'Listings',
        }}
      />

      <Stack.Screen
        name="ListingDetails"
        component={ListingDetails}
        options={{
          title: 'Listing Details',
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
