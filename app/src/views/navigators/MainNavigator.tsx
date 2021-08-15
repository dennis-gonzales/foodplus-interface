import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { ScreenParamList } from '../../core/configs/routes';
import HomeScreen from '../screens/WelcomeScreen';

const MainNavigator: React.FC = () => {

  const Stack = createStackNavigator<ScreenParamList>();

  return (
    <Stack.Navigator initialRouteName="WelcomeScreen">
      <Stack.Screen
        name="WelcomeScreen"
        component={HomeScreen}
        options={{
          title: 'Welcome',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({})

export default MainNavigator;

