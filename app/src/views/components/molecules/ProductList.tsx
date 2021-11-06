import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Product from '../../../core/interfaces/Product';
import ProductItem, { ProductProps } from '../atoms/ProductItem';

type ProductListProps = ProductProps & {
  products: Product[];
};

const ITEM_HEIGHT = 260;

const ProductList: React.FC<ProductListProps> = ({
  products,
  onAddToCartPressed,
  onProductPressed,
}) => {

  const renderItem = React.useCallback(
    ({ item }: { item: Product }) => (
      <View style={styles.product}>
        <ProductItem
          product={item}
          onAddToCartPressed={onAddToCartPressed}
          onProductPressed={onProductPressed}
        />
      </View>
    ),
    []
  );

  const getItemLayout = React.useCallback(
    (data, index) => (
      {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
    ), []);

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.productsContainer}
      columnWrapperStyle={styles.productWrapper}
      initialNumToRender={8}
      getItemLayout={getItemLayout}
      removeClippedSubviews
      showsHorizontalScrollIndicator={false}
      maxToRenderPerBatch={8}
      numColumns={2}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  product: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  productsContainer: {
    padding: 5,
  },
  productWrapper: {
    justifyContent: 'space-evenly'
  }
});

export default ProductList;
