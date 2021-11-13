import React from 'react';
import { Button, Subheading, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { ScreenParamList } from '../../../core/configs/routes';
import { useAppDispatch, useAppSelector } from '../../../core/hooks/storeApi';

type PaymentActionContainerProps = NavigationProp<ScreenParamList, any>;

const PaymentActionContainer: React.FC = () => {
  const navigation = useNavigation<PaymentActionContainerProps>();
  const dispatch = useAppDispatch();

  return (
    <View style={styles.actions}>
      <View style={styles.leftAction}>
        <Text>Total Payable:</Text>
        <Subheading>7,000 PHP</Subheading>
      </View>
      <View style={styles.rightAction}>
        <Button
          onPress={() => navigation.navigate('OrderSuccess')}
          color="darkslateblue"
          contentStyle={{
            paddingVertical: 5,
          }}
          mode="contained"
        >
          MAKE PAYMENT
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftAction: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightAction: {
    flex: 1,
    margin: 10,
  },
});

export default PaymentActionContainer;
