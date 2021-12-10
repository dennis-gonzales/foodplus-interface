import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import { NavigatorParamList, ScreenParamList } from '../../core/configs/routes';
import { selectProducts } from '../../store/slices/cartSlice';
import { useAppSelector } from '../../core/hooks/storeApi';

import HomeNavigator from './HomeNavigator';
import CartScreen from '../screens/CartScreen';
import AccountScreen from '../screens/AccountScreen';
import MyOrdersScreen from '../screens/MyOrdersScreen';

const BottomTabsNavigator: React.FC = () => {

  const cartCount = useAppSelector(selectProducts);

  const Tab = createMaterialBottomTabNavigator<
    ScreenParamList & NavigatorParamList
  >();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          if (route.name === 'Home') {
            return (
              <MaterialCommunityIcons
                name={focused ? 'home' : 'home-outline'}
                color={color}
                size={focused ? 24 : 26}
              />
            );
          } else if (route.name === 'Cart') {
            return (
              <MaterialCommunityIcons
                name={focused ? 'cart' : 'cart-outline'}
                color={color}
                size={focused ? 24 : 26}
              />
            );
          } else if (route.name === 'Account') {
            return (
              <MaterialCommunityIcons
                name={focused ? 'account' : 'account-outline'}
                color={color}
                size={focused ? 24 : 26}
              />
            );
          } else if (route.name === 'MyOrders') {
            return (
              <Ionicons
                name={focused ? 'fast-food' : 'fast-food-outline'}
                color={color}
                size={focused ? 24 : 26}
              />
            );
          }
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarLabel: 'Home',
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'My Cart',
          tabBarBadge: cartCount.length > 0 ? cartCount.length : undefined,
        }}
      />

      <Tab.Screen
        name="MyOrders"
        component={MyOrdersScreen}
        options={{
          tabBarLabel: 'My Orders',
        }}
      />

      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
