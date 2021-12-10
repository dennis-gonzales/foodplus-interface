import React from 'react';
import { StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ScreenParamList } from '../../core/configs/routes';
import SignUpContainer from '../containers/Auth/SignUpContainer';

interface SignUpScreenProps {
  route: RouteProp<ScreenParamList, 'SignUp'>;
  navigation: NativeStackNavigationProp<ScreenParamList, 'SignUp'>;
}

const SignUpScreen: React.FC<SignUpScreenProps> = ({ route, navigation }) => {
  return <SignUpContainer />;
};

const styles = StyleSheet.create({});

export default SignUpScreen;
