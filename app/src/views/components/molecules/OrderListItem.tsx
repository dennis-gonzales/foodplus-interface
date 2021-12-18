import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Divider,
  IconButton,
  List,
  Subheading,
} from 'react-native-paper';
import { Image } from 'react-native-expo-image-cache';

import { appTheme } from '../../../core/configs/theme';
import Product from '../../../core/types/Product';

interface OrderListItemProps {
  product: Product;
  onItemPressed: (product: Product) => void;
}

const OrderListItem: React.FC<OrderListItemProps> = ({
  product,
  onItemPressed,
}) => {
  return (
    <>
      <List.Item
        onPress={() => {}}
        title={product.title}
        description={product.description}
        style={styles.listItem}
        left={props => (
          <View style={styles.listLeftProps}>
            <Image
              {...props}
              style={styles.productImage}
              preview={require('../../../../assets/fp-banner.png')}
              uri={product.image}
            />
          </View>
        )}
        right={props => (
          <IconButton
            {...props}
            icon="open-in-new"
            style={styles.listRightProps}
            onPress={() => onItemPressed(product)}
          />
        )}
      />

      <Divider />

      <View style={styles.content}>
        <Subheading style={styles.price}>{product.price} PHP</Subheading>
        <Subheading>{product.category}</Subheading>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'whitesmoke',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 5,
    marginBottom: 5,
    paddingHorizontal: 10,
  },
  listItem: {
    backgroundColor: 'whitesmoke',
  },
  listLeftProps: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  listRightProps: {
    backgroundColor: appTheme.colors.background,
    borderRadius: 90,
    borderColor: appTheme.colors.primary,
    borderWidth: 0.4,
  },
  price: {
    fontWeight: 'bold',
  },
  productImage: {
    width: 128,
    height: 128,
  },
});

export default OrderListItem;
