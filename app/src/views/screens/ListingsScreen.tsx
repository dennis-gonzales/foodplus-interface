import React from 'react';
import { StyleSheet, } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { ScreenParamList } from '../../core/configs/routes';
import ScreenLayout from '../layouts/ScreenLayout';
import { Chip, Searchbar, } from 'react-native-paper';
import AppbarWidget from '../widgets/AppbarWidget';

interface ListingsProps {
  route: RouteProp<ScreenParamList, 'Listings'>;
  navigation: NavigationProp<ScreenParamList, 'Listings'>;
}

const ListingsScreen: React.FC<ListingsProps> = ({ route, navigation }) => {

  const [search, setSearch] = React.useState('');

  return (
    <ScreenLayout style={styles.container}>
      <AppbarWidget />
      <Searchbar
          theme={{ roundness: 30 }}
          style={{ borderRadius: 30 }}
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
        />

      <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
});

export default ListingsScreen;
