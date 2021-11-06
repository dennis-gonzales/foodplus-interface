import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

import SafeView from '../components/darkMatter/SafeView';

const CartContainer: React.FC = () => {

  return (
    <SafeView>
      <Text>Cart</Text>
    </SafeView>
  );
};

const styles = StyleSheet.create({});

export default CartContainer;
