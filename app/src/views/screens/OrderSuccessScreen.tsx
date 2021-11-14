import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/core';
import { Headline, Subheading, Button } from 'react-native-paper';

import LottieView from 'lottie-react-native';

import { ScreenParamList } from '../../core/configs/routes';

interface OrderSuccessScreenProps {
  route: RouteProp<ScreenParamList, 'OrderSuccess'>;
  navigation: NavigationProp<ScreenParamList, 'OrderSuccess'>;
}

const OrderSuccessScreen: React.FC<OrderSuccessScreenProps> = ({
  route,
  navigation,
}) => {

  return (
    <View style={styles.screen}>
      <LottieView
        autoPlay
        source={require('../../../assets/animations/success.json')}
        style={styles.animation}
        loop={false}
      />

      <View>
        <Headline style={styles.headline}>Order Taken</Headline>

        <Subheading>Your order have been taken is being attended to</Subheading>
      </View>

      <View>
        <Button
          mode="contained"
          style={styles.buttons}
          contentStyle={styles.buttonsContent}
          onPress={() => {}}
        >
          Track Order
        </Button>

        <Button
          mode="text"
          style={styles.buttons}
          contentStyle={styles.buttonsContent}
          onPress={() => navigation.navigate('MerchantListings')}
        >
          Continue Shopping
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  animation: {
    height: 300,
  },
  buttons: {
    borderRadius: 20,
    minWidth: 300,
  },
  buttonsContent: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headline: {
    textAlign: 'center',
  },
  screen: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default OrderSuccessScreen;
