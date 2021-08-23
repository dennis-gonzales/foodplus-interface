import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';

import { ScreenParamList } from '../../core/configs/routes';
import { IconButton, Searchbar } from 'react-native-paper';
import AppbarWidget from '../widgets/AppbarWidget';
import { appTheme } from '../../core/configs/theme';

interface ListingsProps {
  route: RouteProp<ScreenParamList, 'Listings'>;
  navigation: NavigationProp<ScreenParamList, 'Listings'>;
}

const ListingsScreen: React.FC<ListingsProps> = ({ route, navigation }) => {
  const [search, setSearch] = React.useState('');

  return (
    <View style={styles.container}>
      <AppbarWidget />
      <View style={styles.screen}>
        <View style={styles.searchContainer}>
          <Searchbar
            style={styles.searchbar}
            placeholder="Search"
            value={search}
            onChangeText={setSearch}
          />

          <IconButton
            style={styles.filterIcon}
            size={30}
            icon="filter-variant"
          />
        </View>

        {/* <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  filterIcon: {
    backgroundColor: appTheme.colors.surface,
    elevation: 1,
    borderRadius: 10,
    height: 40,
  },
  screen: {
    flex: 1,
    margin: 10,
  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  searchbar: {
    flex: 1,
    borderRadius: 10,
    height: 40,
  },
});

export default ListingsScreen;
