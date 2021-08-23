import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { ScreenParamList } from '../../core/configs/routes';
import WelcomeScreen from '../screens/WelcomeScreen';
import ListingsScreen from '../screens/ListingsScreen';

const MainNavigator: React.FC = () => {
  const Stack = createStackNavigator<ScreenParamList>();

  return (
    <Stack.Navigator
      initialRouteName="Listings"
      screenOptions={{
        headerTitleAlign: 'left',
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          title: 'Welcome',
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Listings"
        component={ListingsScreen}
        options={{
          title: 'Listings',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default MainNavigator;
