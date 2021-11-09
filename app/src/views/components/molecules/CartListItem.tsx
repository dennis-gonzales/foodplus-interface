import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Checkbox, Divider, IconButton, List, Subheading } from 'react-native-paper';

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
    <>
      <List.Item
        onPress={() => toggleStatus(item)}
        title={item.product.title}
        description={item.product.description}
        style={styles.listItem}
        left={props => (
          <View style={styles.listLeftProps}>
            <Checkbox status={status} onPress={() => toggleStatus(item)} />
            <Avatar.Image {...props} source={{ uri: item.product.image }} />
          </View>
        )}
        right={props => (
          <IconButton
            {...props}
            icon="open-in-new"
            style={styles.listRightProps}
            onPress={() => onItemPressed(item)}
          />
        )}
      />

      <Divider />

      <View style={styles.content}>
        <Subheading style={styles.price}>{item.product.price} PHP</Subheading>

        <View style={styles.contentRight}>
        <IconButton
          icon="minus"
          disabled={item.quantity <= 1}
          style={styles.contentButton}
          onPress={() => decreaseQuantity(item.product)}
        />
        <Avatar.Text
          style={styles.contentText}
          size={35}
          label={item.quantity.toString()}
        />
        <IconButton
          icon="plus"
          disabled={item.quantity >= 99}
          style={styles.contentButton}
          onPress={() => increaseQuantity(item.product)}
        />
        </View>
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
  contentRight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  contentButton: {
    backgroundColor: appTheme.colors.background,
    height: 32,
    width: 32,
  },
  contentText: {
    backgroundColor: appTheme.colors.background,
    height: 32,
    width: 32,
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
    marginLeft: 10,
  }
});

export default CartListItem;
