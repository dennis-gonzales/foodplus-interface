import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Checkbox, IconButton, List } from 'react-native-paper';

import { appTheme } from '../../../core/configs/theme';
import CartItem from '../../../core/types/CartItem';
import Product from '../../../core/types/Product';

interface CartItemProps {
  item: CartItem;
  onItemPressed: (item: CartItem) => void;
  decreaseQuantity: (product: Product) => void;
  increaseQuantity: (product: Product) => void;
}

const CartListItem: React.FC<CartItemProps> = ({
  item,
  onItemPressed,
  decreaseQuantity,
  increaseQuantity,
}) => {
  return (
    <List.Item
      onPress={() => onItemPressed(item)}
      title={`${item.quantity > 0 && `${item.quantity}* `}${
        item.product.title
      }`}
      description={`$${item.price}`}
      left={props => (
        <View style={styles.listLeftProps}>
          <Checkbox status="checked" onPress={() => {}} />
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
  listLeftProps: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default CartListItem;
