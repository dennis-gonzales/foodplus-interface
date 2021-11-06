import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { ScreenParamList } from '../../core/configs/routes';

import CartScreen from '../screens/CartScreen';
import AccountScreen from '../screens/AccountScreen';
import ListingsScreen from '../screens/ListingsScreen';

const ListingsNavigator: React.FC = () => {
  const Tab = createMaterialBottomTabNavigator<ScreenParamList>();

  return (
    <Tab.Navigator initialRouteName="Listings">
      <Tab.Screen
        name="Listings"
        component={ListingsScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default ListingsNavigator;