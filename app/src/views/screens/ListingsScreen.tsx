import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';

import { ScreenParamList } from '../../core/configs/routes';
import { Chip, IconButton, Searchbar, Text } from 'react-native-paper';
import AppbarWidget from '../widgets/AppbarWidget';
import { appTheme } from '../../core/configs/theme';
import ProductWidget from '../widgets/ProductWidget';

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

const products = [
  {
    title: 'Product A',
    priceBeforeDiscount: 2.99,
    price: 1.99,
    image: 'https://picsum.photos/400',
  },
  {
    title: 'Product B',
    priceBeforeDiscount: 1.75,
    price: 1.45,
    image: 'https://picsum.photos/500',
  },
  {
    title: 'Product C',
    priceBeforeDiscount: 1.5,
    price: 1.25,
    image: 'https://picsum.photos/600',
  },
  {
    title: 'Product D',
    priceBeforeDiscount: 1.25,
    price: 1.0,
    image: 'https://picsum.photos/700',
  },
];

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

        <View>
          <FlatList
            data={categories}
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <Chip onPress={() => console.log('Pressed')}>{item.name}</Chip>
            )}
          />
        </View>

        <View>
          <FlatList
            data={products}
            keyExtractor={item => item.title}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.product}>
                <ProductWidget
                  title={item.title}
                  priceBeforeDiscount={item.priceBeforeDiscount}
                  price={item.price}
                  imageUri={item.image}
                />
              </View>
            )}
          />
        </View>
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
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  product: {
    width: 200,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  searchbar: {
    flex: 1,
    borderRadius: 10,
    height: 40,
  },
});

export default ListingsScreen;
