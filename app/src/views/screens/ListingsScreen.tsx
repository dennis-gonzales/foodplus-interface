import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Caption, Text } from 'react-native-paper';
import { NavigationProp, RouteProp } from '@react-navigation/native';

import { ScreenParamList } from '../../core/configs/routes';
import ScreenLayout from '../layouts/ScreenLayout';

interface ListingsProps {
  route: RouteProp<ScreenParamList, 'Listings'>;
  navigation: NavigationProp<ScreenParamList, 'Listings'>;
}

const ListingsScreen: React.FC<ListingsProps> = ({ route, navigation }) => {
  return (
    <ScreenLayout>
      <Text>Listings Screen</Text>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({});

export default ListingsScreen;
