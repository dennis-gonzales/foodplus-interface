import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Divider } from 'react-native-paper';
import CartItem from '../../../core/types/CartItem';

import CartListItem from '../molecules/CartListItem';

type CartListProps = Omit<
  React.ComponentPropsWithoutRef<typeof CartListItem>,
  'item' | 'status'
> & {
  items: CartItem[];
};

const CartList: React.FC<CartListProps> = ({ items, ...cartListProps }) => {
  console.log('cart list - render');

  const renderItem = ({ item }: { item: CartItem }) => (
    <CartListItem item={item} status={item.status} {...cartListProps} />
  );

  return (
    <FlatList
      data={items}
      keyExtractor={item => item.product.id.toString()}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <Divider />}
    />
  );
};

const styles = StyleSheet.create({});

export default CartList;
