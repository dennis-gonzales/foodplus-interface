import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Divider, IconButton, Menu, Searchbar } from 'react-native-paper';

import { appTheme } from '../../../core/configs/theme';
import ProductList from '../molecules/ProductList';

type Props = React.ComponentPropsWithoutRef<typeof ProductList> & {
  searchTerm: string;
  onSearchTermChanged: (text: string) => void;
  onSearchPressed: (text: string) => void;
};

const ProductPage: React.FC<Props> = (props) => {
  const [showFilterMenu, setShowFilterMenu] = React.useState<boolean>(false);

  return (
    <>
      <View style={styles.searchContainer}>
        <Searchbar
          style={styles.searchbar}
          placeholder="Search"
          value={props.searchTerm}
          onIconPress={() => props.onSearchPressed(props.searchTerm)}
          onSubmitEditing={() => props.onSearchPressed(props.searchTerm)}
          onChangeText={props.onSearchTermChanged}
        />

        <Menu
          visible={showFilterMenu}
          onDismiss={() => setShowFilterMenu(false)}
          anchor={
            <IconButton
              onPress={() => setShowFilterMenu(true)}
              style={styles.filterIcon}
              size={30}
              icon="filter-variant"
            />
          }
        >
          <Menu.Item onPress={() => {}} title="Item 1" />
          <Menu.Item onPress={() => {}} title="Item 2" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Item 3" />
        </Menu>
      </View>

      <ProductList {...props} />
    </>
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
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

export default ProductPage;