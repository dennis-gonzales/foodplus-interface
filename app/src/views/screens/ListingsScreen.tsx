import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ScreenParamList } from '../../core/configs/routes';
import ListingsContainer from '../containers/ListingsContainer';

interface ListingsScreenProps {
  route: RouteProp<ScreenParamList, 'Listings'>;
  navigation: NativeStackNavigationProp<ScreenParamList, 'Listings'>;
}

const ListingsScreen: React.FC<ListingsScreenProps> = ({ route, navigation }) => {
  return <ListingsContainer />;
};

export default ListingsScreen;