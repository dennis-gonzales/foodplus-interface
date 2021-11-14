import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { NavigatorParamList, ScreenParamList } from '../../core/configs/routes';
import { selectProducts } from '../../store/slices/cartSlice';
import { useAppSelector } from '../../core/hooks/storeApi';

import HomeNavigator from './HomeNavigator';
import CartScreen from '../screens/CartScreen';
import AccountScreen from '../screens/AccountScreen';

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
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Account') {
            iconName = focused ? 'account' : 'account-outline';
          }

          return (
            <MaterialCommunityIcons
              name={iconName as any}
              color={color}
              size={26}
            />
          );
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
