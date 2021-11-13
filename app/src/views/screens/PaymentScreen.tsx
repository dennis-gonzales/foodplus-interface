import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ScreenParamList } from '../../core/configs/routes';
import PaymentMethodsContainer from '../containers/Payment/PaymentMethodsContainer';
import PaymentActionContainer from '../containers/Payment/PaymentActionContainer';

interface PaymentScreenProps {
  route: RouteProp<ScreenParamList, 'Payment'>;
  navigation: NativeStackNavigationProp<ScreenParamList, 'Payment'>;
}

const PaymentScreen: React.FC<PaymentScreenProps> = ({ route, navigation }) => {
  return (
    <View style={styles.screen}>
      <PaymentMethodsContainer />
      <PaymentActionContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default PaymentScreen;
