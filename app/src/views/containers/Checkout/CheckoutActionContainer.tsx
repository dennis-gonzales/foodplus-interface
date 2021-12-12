import React from 'react';
import { Button, Subheading, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { ScreenParamList } from '../../../core/configs/routes';
import { useAppDispatch, useAppSelector } from '../../../core/hooks/storeApi';
import { selectCartTotalPrice } from '../../../store/slices/cartSlice';
import { numberWithCommas } from '../../../core/helpers/number';

type CheckoutActionContainerProps = NavigationProp<ScreenParamList, any>;

const CheckoutActionContainer: React.FC = () => {
  const navigation = useNavigation<CheckoutActionContainerProps>();
  const dispatch = useAppDispatch();

  const cartTotalPrice = useAppSelector(selectCartTotalPrice);

  return (
    <View style={styles.actions}>
      <View style={styles.leftAction}>
        <Text>Total Payable:</Text>
        <Subheading style={styles.payable} numberOfLines={2}>
          {numberWithCommas(cartTotalPrice)} PHP
        </Subheading>
      </View>
      <View style={styles.rightAction}>
        <Button
          onPress={() => navigation.navigate('Payment')}
          style={styles.button}
          contentStyle={{
            paddingVertical: 5,
          }}
          mode="contained"
        >
          NEXT
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
  button: {
    borderRadius: 20,
  },
  leftAction: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  payable: {
    fontWeight: 'bold',
  },
  rightAction: {
    flex: 1,
    margin: 10,
  },
});

export default CheckoutActionContainer;
