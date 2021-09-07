import React from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import {
  Chip,
  IconButton,
  Subheading,
  Searchbar,
  Title,
} from 'react-native-paper';
import { NavigationProp, RouteProp } from '@react-navigation/native';

import AppbarWidget from '../widgets/AppbarWidget';
import ProductWidget from '../widgets/ProductWidget';

import { ScreenParamList } from '../../core/configs/routes';
import { appTheme } from '../../core/configs/theme';
import Product from '../../core/interfaces/Product';

interface ListingsProps {
  route: RouteProp<ScreenParamList, 'Listings'>;
  navigation: NavigationProp<ScreenParamList, 'Listings'>;
}

const categories = [
  {
    name: 'All',
    id: 1,
  },
  {
    name: 'Salad Combo',
    id: 2,
  },
  {
    name: 'Berry Combo',
    id: 3,
  },
  {
    name: 'Mango Combo',
    id: 4,
  },
  {
    name: 'Beverage Combo',
    id: 5,
  },
];

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

// TODO: for testing purposes
export const products: Product[] = [
  {
    id: 1,
    title: 'Product A',
    priceBeforeDiscount: 2.99,
    price: 1.99,
    image: 'https://picsum.photos/400',
  },
  {
    id: 2,
    title: 'Product B',
    priceBeforeDiscount: 1.75,
    price: 1.45,
    image: 'https://picsum.photos/500',
  },
  {
    id: 3,
    title: 'Product C',
    priceBeforeDiscount: 1.5,
    price: 1.25,
    image: 'https://picsum.photos/600',
  },
  {
    id: 4,
    title: 'Product D',
    priceBeforeDiscount: 1.25,
    price: 1.0,
    image: 'https://picsum.photos/700',
  },
];

const ListingsScreen: React.FC<ListingsProps> = ({ route, navigation }) => {
  const [category, setCategory] = React.useState<number>(categories[0].id);
  const [filter, setFilter] = React.useState<number>(filters[0].id);
  const [deals, setDeals] = React.useState<number>(xdeals[0].id);
  const [search, setSearch] = React.useState<string>('');

  return (
    <View style={styles.screen}>
      <View>
        <AppbarWidget />
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
      </View>

      <ScrollView>
        <View>
          <FlatList
            data={categories}
            extraData={category}
            keyExtractor={item => item.id.toString()}
            horizontal
            contentContainerStyle={styles.chipContainer}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <Chip
                style={[
                  styles.categoryChip,
                  category === item.id && styles.activeCategory,
                ]}
                onPress={() => setCategory(item.id)}
              >
                {item.name}
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
            data={products}
            keyExtractor={item => item.title}
            horizontal
            contentContainerStyle={styles.productContainer}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.product}>
                <ProductWidget
                  product={item}
                  onPress={() =>
                    navigation.navigate('ListingDetails', { productId: item.id })
                  }
                  onLike={() => {}}
                />
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
            data={products}
            keyExtractor={item => item.title}
            horizontal
            contentContainerStyle={styles.productContainer}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.product}>
                <ProductWidget
                  product={item}
                  onPress={() =>
                    navigation.navigate('ListingDetails', { productId: item.id })
                  }
                  onLike={() => {}}
                />
              </View>
            )}
          />
        </View>
      </ScrollView>
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
