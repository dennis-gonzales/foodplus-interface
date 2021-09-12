import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { ScreenParamList } from '../../core/configs/routes';
import WelcomeScreen from '../screens/WelcomeScreen';
import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import CartScreen from '../screens/CartScreen';
import DeliveryStatusScreen from '../screens/DeliveryStatusScreen';

const MainNavigator: React.FC = () => {
  const Stack = createStackNavigator<ScreenParamList>();

  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerTitleAlign: 'left',
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          title: 'Welcome',
        }}
      />

      <Stack.Screen
        name="Listings"
        component={ListingsScreen}
        options={{
          title: 'Listings',
        }}
      />

      <Stack.Screen
        name="ListingDetails"
        component={ListingDetailsScreen}
        options={{
          title: 'Listing Details',
        }}
      />

      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: 'Cart',
        }}
      />

      <Stack.Screen
        name="DeliveryStatus"
        component={DeliveryStatusScreen}
        options={{
          title: 'Delivery Status',
        }}
      />

    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default MainNavigator;
