import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Subheading, Title } from 'react-native-paper';
import { appTheme } from '../../../core/configs/theme';

interface CartPriceSummaryProps {
  totalPrice: string;
  onCheckoutPressed: () => void;
}

const CartPriceSummary: React.FC<CartPriceSummaryProps> = ({
  totalPrice,
  onCheckoutPressed,
}) => {
  return (
    <View style={styles.footer}>
      <View style={styles.centerFullyAligned}>
        <Subheading>Total</Subheading>
        <Title>PHP {totalPrice}</Title>
      </View>

      <Button
        mode="contained"
        style={styles.checkoutButton}
        contentStyle={{
          paddingVertical: 5,
        }}
        onPress={onCheckoutPressed}
      >
        Checkout
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  centerFullyAligned: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  checkoutButton: {
    borderRadius: 20,
    flex: 1,
    marginHorizontal: 20,
  },
  footer: {
    alignItems: 'center',
    backgroundColor: appTheme.colors.background,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 80,
  },
});

export default CartPriceSummary;
