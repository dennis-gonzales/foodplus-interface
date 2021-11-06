import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Product from '../../../core/interfaces/Product';
import ProductItem, { ProductProps } from '../atoms/ProductItem';

type ProductListProps = ProductProps & {
  products: Product[];
};

const ProductList: React.FC<ProductListProps> = ({
  products,
  onAddToCartPressed,
  onProductPressed,
}) => {
  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.productContainer}
      columnWrapperStyle={styles.productWrapper}
      initialNumToRender={8}
      removeClippedSubviews
      showsHorizontalScrollIndicator={false}
      numColumns={2}
      renderItem={({ item }) => (
        <View style={styles.product}>
          <ProductItem
            product={item}
            onAddToCartPressed={onAddToCartPressed}
            onProductPressed={onProductPressed}
          />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  product: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  productContainer: {
    padding: 5,
  },
  productWrapper: {
    justifyContent: 'space-evenly'
  }
});

export default ProductList;
