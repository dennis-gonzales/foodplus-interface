import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { ScreenParamList } from '../../core/configs/routes';
import WelcomeScreen from '../screens/WelcomeScreen';
import ListingsScreen from '../screens/ListingsScreen';

const MainNavigator: React.FC = () => {

  const Stack = createStackNavigator<ScreenParamList>();

  return (
    <Stack.Navigator
      initialRouteName="Listings"
      screenOptions={{
        headerLeft: () => <MaterialCommunityIcons name="menu" size={24} />,
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
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  leftHeader: {
    fontSize: 40,
  },
});

export default MainNavigator;

