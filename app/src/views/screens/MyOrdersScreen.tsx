import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Title } from 'react-native-paper';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ScreenParamList } from '../../core/configs/routes';
import LottieContentView from '../common/LottieContentView';

interface MyOrdersScreenProps {
  route: RouteProp<ScreenParamList, 'MyOrders'>;
  navigation: NativeStackNavigationProp<ScreenParamList, 'MyOrders'>;
}

const MyOrdersScreen: React.FC<MyOrdersScreenProps> = ({ route, navigation }) => {
  
  return (
    <LottieContentView
      source={require('../../../assets/animations/empty-box.json')}
      bottomContent={
        <>
          <Title style={styles.marginBottom}>No Orders Found</Title>
          <Button
            icon="cart"
            mode="contained"
            onPress={() => navigation.navigate('Listings')}
          >
            Shop Now
          </Button>
        </>
      }
      lottieContainerStyle={styles.lottieContainer}
    />
  );
};

const styles = StyleSheet.create({
  lottieContainer: {
    justifyContent: 'center',
  },
  marginBottom: {
    marginBottom: 20,
  },
});

export default MyOrdersScreen;