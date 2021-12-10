import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreenParamList, NavigatorParamList } from '../../core/configs/routes';
import SignInScreen from '../screens/SignInScreen';

const AuthNavigator: React.FC = () => {
  const Stack = createNativeStackNavigator<
    ScreenParamList
  >();

  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignIn" component={SignInScreen} />

      {/* <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
      /> */}
    </Stack.Navigator>
  );
};

export default AuthNavigator;
