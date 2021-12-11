import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Product from '../../../core/types/Product';

import OrderListItem from '../molecules/OrderListItem';

type OrdersListProps = Omit<
  React.ComponentPropsWithoutRef<typeof OrderListItem>,
  'product'
> & {
  orders: Product[];
};
const OrdersList: React.FC<OrdersListProps> = ({ orders, ...productListProps }) => {

  const renderItem = ({ item }: { item: Product }) => (
    <OrderListItem product={item} {...productListProps} />
  );

  return (
    <FlatList
      data={orders}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({});

export default OrdersList;
