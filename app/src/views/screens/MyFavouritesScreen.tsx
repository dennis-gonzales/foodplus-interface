import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Title } from 'react-native-paper';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ScreenParamList } from '../../core/configs/routes';
import LottieContentView from '../common/LottieContentView';

interface MyFavouritesScreenProps {
  route: RouteProp<ScreenParamList, 'MyFavourites'>;
  navigation: NativeStackNavigationProp<ScreenParamList, 'MyFavourites'>;
}

const MyFavouritesScreen: React.FC<MyFavouritesScreenProps> = ({ route, navigation }) => {
  
  return (
    <LottieContentView
      source={require('../../../assets/animations/empty-box.json')}
      bottomContent={
        <>
          <Title style={styles.marginBottom}>No Favourites Yet</Title>
          <Button
            icon="cart"
            mode="contained"
            style={styles.button}
            contentStyle={{
              paddingVertical: 5,
            }}
            onPress={() => navigation.navigate('Merchants')}
          >
            Find My Favourite
          </Button>
        </>
      }
      lottieContainerStyle={styles.lottieContainer}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
  },
  lottieContainer: {
    justifyContent: 'center',
  },
  marginBottom: {
    marginBottom: 20,
  },
});

export default MyFavouritesScreen;