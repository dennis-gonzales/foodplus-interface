import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import CartItem from '../../../core/types/CartItem';

import CartSummaryListItem from '../molecules/CartSummaryListItem';

type CartSummaryListProps = Omit<
  React.ComponentPropsWithoutRef<typeof CartSummaryListItem>,
  'item'
> & {
  items: CartItem[];
};

const CartSummaryList: React.FC<CartSummaryListProps> = ({ items, ...cartListProps }) => {

  const renderItem = ({ item }: { item: CartItem }) => (
    <View style={styles.product}>
      <CartSummaryListItem item={item} {...cartListProps} />
    </View>
  );

  return (
    <FlatList
      data={items}
      keyExtractor={item => item.product.id.toString()}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  product: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  productsContainer: {
    padding: 5,
  },
  productWrapper: {
    justifyContent: 'space-evenly',
  },
});

export default CartSummaryList;
