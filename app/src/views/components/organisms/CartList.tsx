import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import CartItem from '../../../core/types/CartItem';

import CartListItem from '../molecules/CartListItem';

type CartListProps = Omit<
  React.ComponentPropsWithoutRef<typeof CartListItem>,
  'item'
> & {
  items: CartItem[];
};

const CartList: React.FC<CartListProps> = ({ items, ...cartListProps }) => {

  const renderItem = ({ item }: { item: CartItem }) => (
    <CartListItem item={item} {...cartListProps} />
  );

  return (
    <FlatList
      data={items}
      keyExtractor={item => item.product.id.toString()}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({});

export default CartList;
