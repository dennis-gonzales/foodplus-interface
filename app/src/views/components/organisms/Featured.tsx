import React from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Button, Title } from 'react-native-paper';

import Merchant from '../../../core/types/Merchant';
import MerchantPopularItem from '../molecules/MerchantPopularItem';

const sampleMerchantList: Merchant[] = [
  {
    name: 'McDonalds',
    logo: 'https://www.freepnglogos.com/uploads/mcdonalds-png-logo/mcdonalds-png-logo-picture-3.png',
  },
  {
    name: 'Burger King',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Burger_King_2020.svg/1200px-Burger_King_2020.svg.png',
  },
  {
    name: 'KFC',
    logo: 'https://corporate.kfc.com.ph/wp-content/themes/kfc/assets/images/logo.png',
  },
];

const Featured: React.FC = () => {
  return (
    <>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={{
            uri: 'https://www.namesnack.com/images/namesnack-fast-food-restaurant-business-names-4240x2832-20200915.jpeg?crop=2:1,smart&width=1200&dpr=2',
          }}
          resizeMode="cover"
          style={styles.image}
        >
          <Button
            style={styles.button}
            contentStyle={{
              paddingVertical: 5,
            }}
            labelStyle={{
              fontWeight: 'bold',
            }}
            onPress={() => {}}
            mode="contained"
          >
            Let's Go!
          </Button>
        </ImageBackground>
      </View>

      <Title style={styles.title}>Popular Today</Title>

      <FlatList
        data={sampleMerchantList}
        keyExtractor={item => item.name}
        horizontal
        contentContainerStyle={styles.productContainer}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <MerchantPopularItem merchant={item} onPress={() => {}} />
          </View>
        )}
      />

      <Title style={styles.title}>Browse for more</Title>
    </>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: 250,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    width: 150,
    borderRadius: 20,
    margin: 20,
  },
  title: {
    marginLeft: 20,
    marginTop: 20,
  },
  product: {
    width: 250,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  productContainer: {
    marginVertical: 10,
    paddingHorizontal: 15,
  },
});

export default Featured;
