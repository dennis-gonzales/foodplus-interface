import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Divider, IconButton, Menu, Searchbar } from 'react-native-paper';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useAppDispatch, useAppSelector } from '../../../core/hooks/storeApi';
import { ScreenParamList } from '../../../core/configs/routes';
import { appTheme } from '../../../core/configs/theme';
import {
  filterProducts,
  selectSearchTerm,
  setSearchTerm,
} from '../../../store/slices/productsSlice';

type ProductListContainerProps = NavigationProp<ScreenParamList, any>;

const ProductListContainer: React.FC = () => {
  const navigation = useNavigation<ProductListContainerProps>();
  const dispatch = useAppDispatch();

  const searchTerm = useAppSelector(selectSearchTerm);

  const [showFilterMenu, setShowFilterMenu] = React.useState<boolean>(false);

  return (
    <View style={styles.searchContainer}>
      <Searchbar
        style={styles.searchbar}
        placeholder="Search"
        value={searchTerm}
        onIconPress={() => dispatch(filterProducts(searchTerm))}
        onSubmitEditing={() => dispatch(filterProducts(searchTerm))}
        onChangeText={text => dispatch(setSearchTerm(text))}
      />

      <Menu
        visible={showFilterMenu}
        onDismiss={() => setShowFilterMenu(false)}
        anchor={
          <IconButton
            onPress={() => setShowFilterMenu(true)}
            style={styles.filterIcon}
            size={30}
            icon={() => (
              <MaterialCommunityIcons
                name="filter-menu-outline"
                size={24}
                color="black"
              />
            )}
          />
        }
      >
        <Menu.Item
          icon={() => (
            <MaterialCommunityIcons
              name="sort-alphabetical-ascending"
              size={24}
              color="black"
            />
          )}
          onPress={() => {}}
          title="Ascending"
        />
        <Menu.Item
          icon={() => (
            <MaterialCommunityIcons
              name="sort-alphabetical-descending"
              size={24}
              color="black"
            />
          )}
          onPress={() => {}}
          title="Descending"
        />
        <Divider />
        <Menu.Item
          icon={() => (
            <MaterialCommunityIcons
              name="star-four-points-outline"
              size={24}
              color="black"
            />
          )}
          onPress={() => {}}
          title="Popular"
        />
        <Menu.Item
          icon={() => (
            <MaterialCommunityIcons name="new-box" size={24} color="black" />
          )}
          onPress={() => {}}
          title="Newly Added"
        />
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  filterIcon: {
    borderRadius: 10,
    elevation: 1,
    backgroundColor: appTheme.colors.background,
    height: 40,
    margin: 0,
    marginLeft: 10,
  },
  searchbar: {
    flex: 1,
    borderRadius: 10,
    height: 40,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 10,
  },
});

export default ProductListContainer;
