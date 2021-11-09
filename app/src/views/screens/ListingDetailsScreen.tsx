import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ScreenParamList } from '../../core/configs/routes';
import ListingDetailsContainer from '../containers/ListingDetailsContainer';

interface ListingDetailsScreenProps {
  route: RouteProp<ScreenParamList, 'ListingDetails'>;
  navigation: NativeStackNavigationProp<ScreenParamList, 'ListingDetails'>;
}

const ListingDetailsScreen: React.FC<ListingDetailsScreenProps> = ({ route, navigation }) => {
  return (
    <>
      <ListingDetailsContainer />
    </>
  );
};

export default ListingDetailsScreen;