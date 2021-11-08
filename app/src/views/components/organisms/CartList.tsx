import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import CartItem from '../../../core/types/CartItem';

import CartListItem from '../molecules/CartListItem';

type CartListProps = Omit<React.ComponentPropsWithoutRef<typeof CartListItem>, "item"> & {
  items: CartItem[];
}

const CartList: React.FC<CartListProps> = ({ items, ...props }) => {

  console.log('cart list - render');

  const renderItem = ({ item }: { item: CartItem }) => (
    <CartListItem item={item} {...props} />
  );

  return (
    <View style={styles.cartDetailsContainer}>
        <FlatList
          data={items}
          keyExtractor={item => item.product.id.toString()}
          renderItem={renderItem}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  cartDetailsContainer: {
    paddingHorizontal: 20,
    marginVertical: 20,
  }
});

export default CartList;
