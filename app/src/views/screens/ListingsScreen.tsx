import React from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { Chip, IconButton, Searchbar, Title } from 'react-native-paper';
import { NavigationProp, RouteProp } from '@react-navigation/native';

import AppbarWidget from '../widgets/AppbarWidget';
import ProductWidget from '../widgets/ProductWidget';

import { ScreenParamList } from '../../core/configs/routes';
import { appTheme } from '../../core/configs/theme';

import { useAppDispatch, useAppSelector } from '../../core/hooks/storeApi';
import {
  loadProducts,
  filterProducts,
  selectProducts,
  selectIsLoading as selectIsLoadingProducts,
  selectIsFiltered,
  selectFilterableProducts,
} from '../../store/slices/productsSlice';
import {
  loadCategories,
  selectActive,
  selectCategories,
  selectIsLoading as selectIsLoadingCategories,
  updateCategory,
} from '../../store/slices/categoriesSlice';

import LoadingListingsLayout from '../layouts/LoadingListingsLayout';
import NoResultsLayout from '../layouts/NoResultsLayout';

interface ListingsProps {
  route: RouteProp<ScreenParamList, 'Listings'>;
  navigation: NavigationProp<ScreenParamList, 'Listings'>;
}

const filters = [
  {
    name: 'Hottest',
    id: 1,
  },
  {
    name: 'Popular',
    id: 2,
  },
  {
    name: 'New Combo',
    id: 3,
  },
];

const xdeals = [
  {
    name: '5PM Deals',
    id: 1,
  },
  {
    name: '6PM Deals',
    id: 2,
  },
];

const ListingsScreen: React.FC<ListingsProps> = ({ route, navigation }) => {
  const dispatch = useAppDispatch();

  /**
   * @description = useSelector hook to get the products from the store
   */
  const products = useAppSelector(state => selectProducts(state));
  const isFiltered = useAppSelector(state => selectIsFiltered(state));
  const isLoadingProducts = useAppSelector(state =>
    selectIsLoadingProducts(state)
  );
  const filterableProducts = useAppSelector(state =>
    selectFilterableProducts(state)
  );

  /**
   * @description = useSelector hook to get the categories from the store
   */
  const categories = useAppSelector(state => selectCategories(state));
  const category = useAppSelector(state => selectActive(state));
  const isLoadingCategories = useAppSelector(state =>
    selectIsLoadingCategories(state)
  );

  const [deals, setDeals] = React.useState<number>(xdeals[0].id);
  const [filter, setFilter] = React.useState<number>(filters[0].id);
  const [search, setSearch] = React.useState<string>('');

  React.useEffect(() => {
    dispatch(loadCategories());
  }, []);

  React.useEffect(() => {
    dispatch(loadProducts({ category }));
  }, [category]);

  React.useEffect(() => {
    if (products.length > 0) dispatch(filterProducts(search));
  }, [search]);

  const renderListings = (): JSX.Element => {
    if (isLoadingProducts || isLoadingCategories) {
      return <LoadingListingsLayout />;
    } else if (products.length === 0) {
      return <NoResultsLayout />;
    }

    return (
      <ScrollView>
        <View>
          <FlatList
            data={categories}
            extraData={category}
            keyExtractor={item => item}
            horizontal
            contentContainerStyle={styles.chipContainer}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <Chip
                style={[
                  styles.categoryChip,
                  category === item && styles.activeCategory,
                ]}
                onPress={() => dispatch(updateCategory(item))}
              >
                {item}
              </Chip>
            )}
          />
        </View>

        <View>
          <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
            <Title>The Wholesome Table</Title>

            <FlatList
              data={xdeals}
              extraData={deals}
              keyExtractor={item => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <Chip
                  style={[
                    styles.bottomBorder,
                    deals === item.id && styles.activeBottomBorder,
                  ]}
                  onPress={() => setDeals(item.id)}
                >
                  {item.name}
                </Chip>
              )}
            />
          </View>

          <FlatList
            data={filterableProducts.slice(0, 10)}
            keyExtractor={item => item.id.toString()}
            horizontal
            contentContainerStyle={styles.productContainer}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.product}>
                <ProductWidget product={item} />
              </View>
            )}
          />
        </View>

        <View>
          <FlatList
            data={filters}
            keyExtractor={item => item.id.toString()}
            extraData={filter}
            horizontal
            contentContainerStyle={styles.chipContainer}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <Chip
                style={[
                  styles.bottomBorder,
                  filter === item.id && styles.activeBottomBorder,
                ]}
                onPress={() => setFilter(item.id)}
              >
                {item.name}
              </Chip>
            )}
          />

          <FlatList
            data={filterableProducts.slice(10, 20)}
            keyExtractor={item => item.id.toString()}
            horizontal
            contentContainerStyle={styles.productContainer}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.product}>
                <ProductWidget product={item} />
              </View>
            )}
          />
        </View>
      </ScrollView>
    );
  };

  const renderFilteredListings = (): JSX.Element => {
    if (isLoadingProducts || isLoadingCategories) {
      return <LoadingListingsLayout />;
    } else if (filterProducts.length === 0) {
      return <NoResultsLayout />;
    }

    return (
      <FlatList
        data={filterableProducts}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.productContainer}
        renderItem={({ item }) => (
          <View style={styles.productFiltered}>
            <ProductWidget product={item} />
          </View>
        )}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <View>
        <AppbarWidget />
        {products.length > 0 && categories.length > 0 && (
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
        )}
      </View>

      {isFiltered ? renderFilteredListings() : renderListings()}
    </View>
  );
};

const styles = StyleSheet.create({
  activeBottomBorder: {
    borderColor: appTheme.colors.primary,
    borderWidth: 0,
    borderBottomWidth: 4,
  },
  activeCategory: {
    backgroundColor: appTheme.colors.primary,
  },
  bottomBorder: {
    elevation: 0,
    borderRadius: 0,
    backgroundColor: 'transparent',
  },
  categoryChip: {
    backgroundColor: appTheme.colors.background,
    elevation: 2,
    margin: 4,
  },
  chipContainer: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  filterIcon: {
    borderRadius: 10,
    elevation: 1,
    backgroundColor: appTheme.colors.background,
    height: 40,
    margin: 0,
    marginLeft: 10,
  },
  product: {
    width: 180,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  productContainer: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  productFiltered: {
    minHeight: 300,
  },
  screen: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  searchbar: {
    flex: 1,
    borderRadius: 10,
    height: 40,
  },
});

export default ListingsScreen;
