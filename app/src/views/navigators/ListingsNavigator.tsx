import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ScreenParamList } from '../../core/configs/routes';
import ListingsScreen from '../screens/ListingsScreen';

const ListingsNavigator: React.FC = () => {
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
        component={ListingsScreen}
        options={{
          title: 'Listings',
        }}
      />
    </Stack.Navigator>
  );
};

export default ListingsNavigator;
