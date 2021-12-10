import React from 'react';
import { StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ScreenParamList } from '../../core/configs/routes';
import SignInContainer from '../containers/Auth/SignInContainer';

interface SignInScreenProps {
  route: RouteProp<ScreenParamList, 'SignIn'>;
  navigation: NativeStackNavigationProp<ScreenParamList, 'SignIn'>;
}

const SignInScreen: React.FC<SignInScreenProps> = ({ route, navigation }) => {
  return <SignInContainer />;
};

const styles = StyleSheet.create({});

export default SignInScreen;
