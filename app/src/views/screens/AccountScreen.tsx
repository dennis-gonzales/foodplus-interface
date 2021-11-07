import React from 'react';
import { RouteProp } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ScreenParamList } from '../../core/configs/routes';
import AccountContainer from '../containers/AccountContainer';

interface AccountScreenProps {
  route: RouteProp<ScreenParamList, 'Account'>;
  navigation: NativeStackNavigationProp<ScreenParamList, 'Account'>;
}

const AccountScreen: React.FC<AccountScreenProps> = ({ route, navigation }) => {
  return <AccountContainer />;
};

export default AccountScreen;