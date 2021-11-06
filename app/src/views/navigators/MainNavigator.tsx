import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ScreenParamList } from '../../core/configs/routes';
import Listings from '../screens/ListingsScreen';

const MainNavigator: React.FC = () => {
  const Stack = createStackNavigator<ScreenParamList>();

  return (
    <Stack.Navigator
      initialRouteName="Listings"
      screenOptions={{
        headerTitleAlign: 'left',
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Listings"
        component={Listings}
        options={{
          title: 'Listings',
        }}
      />
      
    </Stack.Navigator>
  );
};

export default MainNavigator;