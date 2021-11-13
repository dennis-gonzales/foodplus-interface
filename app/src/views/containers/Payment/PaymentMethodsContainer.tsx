import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Dialog, Divider, Subheading } from 'react-native-paper';
import { NavigationProp, useNavigation } from '@react-navigation/core';

import { useAppDispatch, useAppSelector } from '../../../core/hooks/storeApi';
import { ScreenParamList } from '../../../core/configs/routes';
import { RadioButton } from 'react-native-paper';

type PaymentMethodsContainerProps = NavigationProp<ScreenParamList, any>;

const PaymentMethodsContainer: React.FC = () => {
  const navigation = useNavigation<PaymentMethodsContainerProps>();
  const dispatch = useAppDispatch();

  const [value, setValue] = React.useState('COD');

  return (
    <View style={styles.container}>
      <Subheading style={styles.title}>Choose Payment Method</Subheading>
      <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
        <RadioButton.Item label="Cash On Delivery" value="COD" />
        <Divider />
        <RadioButton.Item label="Credit Card" value="CC" />
        <Divider />
        <RadioButton.Item label="GCash" value="GCASH" />
      </RadioButton.Group>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  title: {
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },  
});

export default PaymentMethodsContainer;
