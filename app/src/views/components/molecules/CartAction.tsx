import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Checkbox, Subheading } from 'react-native-paper';

interface CartActionProps {
  status: 'checked' | 'unchecked' | 'indeterminate';
  toggleStatus: () => void;
  onClearPressed: () => void;
}

const CartAction: React.FC<CartActionProps> = ({
  status,
  toggleStatus,
  onClearPressed,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.checkbox}>
        <Checkbox status={status} onPress={toggleStatus} />
        <Subheading>Select All</Subheading>
      </View>

      <Button color="red" mode="text" onPress={onClearPressed}>
        CLEAR
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkbox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 115,
  },
});

export default CartAction;
