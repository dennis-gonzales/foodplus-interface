import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Product from '../../../core/types/Product';
import MerchantProductItem from '../molecules/MerchantProductItem';

type ProductListProps = Omit<
  React.ComponentPropsWithoutRef<typeof MerchantProductItem>,
  'product'
> & {
  products: Product[];
};

const ITEM_HEIGHT = 260;

const ProductList: React.FC<ProductListProps> = ({
  products,
  ...productItemProps
}) => {
  console.log('product list - render');

  const renderItem = React.useCallback(
    ({ item }: { item: Product }) => (
      <View style={styles.product}>
        <MerchantProductItem product={item} {...productItemProps} />
      </View>
    ),
    []
  );

  const getItemLayout = React.useCallback(
    (data, index) => ({
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index,
    }),
    []
  );

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.productsContainer}
      columnWrapperStyle={styles.productWrapper}
      initialNumToRender={8}
      getItemLayout={getItemLayout}
      removeClippedSubviews
      maxToRenderPerBatch={8}
      numColumns={2}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  product: {
    flex: 0.5,
    margin: 2,
  },
  productsContainer: {
    padding: 5,
  },
  productWrapper: {
    justifyContent: 'space-between',
  },
});

export default ProductList;
