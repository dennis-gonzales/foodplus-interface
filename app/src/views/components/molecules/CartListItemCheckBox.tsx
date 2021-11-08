import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Checkbox, Subheading } from 'react-native-paper';

interface CartListItemCheckBoxProps {
  status: 'checked' | 'unchecked' | 'indeterminate';
  toggleStatus: () => void;
}

const CartListItemCheckBox: React.FC<CartListItemCheckBoxProps> = ({
  status,
  toggleStatus,
}) => {
  return (
    <View style={styles.container}>
      <Checkbox status={status} onPress={toggleStatus} />
      <Subheading>Select All</Subheading>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 115,
  },
});

export default CartListItemCheckBox;
