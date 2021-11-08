import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Avatar,
  Button,
  Caption,
  Checkbox,
  IconButton,
  List,
} from 'react-native-paper';

import { appTheme } from '../../../core/configs/theme';
import CartItem from '../../../core/types/CartItem';
import Product from '../../../core/types/Product';

interface CartItemProps {
  item: CartItem;
  status: 'checked' | 'unchecked' | 'indeterminate';
  onItemPressed: (item: CartItem) => void;
  toggleStatus: (item: CartItem) => void;
  decreaseQuantity: (product: Product) => void;
  increaseQuantity: (product: Product) => void;
}

const CartListItem: React.FC<CartItemProps> = ({
  item,
  status,
  onItemPressed,
  toggleStatus,
  decreaseQuantity,
  increaseQuantity,
}) => {
  return (
    <List.Item
      onPress={() => onItemPressed(item)}
      title={item.product.title}
      description={item.product.description}
      left={props => (
        <View style={styles.listLeftProps}>
          <Checkbox status={status} onPress={() => toggleStatus(item)} />
          <Avatar.Image {...props} source={{ uri: item.product.image }} />
        </View>
      )}
      right={props => (
        <IconButton
          {...props}
          icon="minus"
          style={{
            backgroundColor: appTheme.colors.primary,
            borderRadius: 90,
          }}
          onPress={() => decreaseQuantity(item.product)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  description: {
    backgroundColor: 'lightgrey',
    minHeight: 60,
    display: 'flex',
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  listLeftProps: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default CartListItem;
