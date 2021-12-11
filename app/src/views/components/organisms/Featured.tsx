import React from 'react'
import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { Button, Title } from 'react-native-paper';
import MerchantPopularItem from '../molecules/MerchantPopularItem';

const products: any[] = [
  {
    id: 1,
    title: 'Product A',
    price: 1.99,
    image: 'https://picsum.photos/400',
  },
  {
    id: 2,
    title: 'Product B',
    priceBeforeDiscount: 1.75,
    price: 1.45,
    image: 'https://picsum.photos/500',
  },
  {
    id: 3,
    title: 'Product C',
    priceBeforeDiscount: 1.5,
    price: 1.25,
    image: 'https://picsum.photos/600',
  },
  {
    id: 4,
    title: 'Product D',
    priceBeforeDiscount: 1.25,
    price: 1.0,
    image: 'https://picsum.photos/700',
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

      <Title style={{ marginLeft: 20, marginTop: 20 }}>Popular Today</Title>

      <FlatList
        data={products}
        keyExtractor={item => item.title}
        horizontal
        contentContainerStyle={styles.productContainer}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <MerchantPopularItem
              product={item}
              onPress={() => {}}
            />
          </View>
        )}
      />

      <Title style={{ marginLeft: 20, marginTop: 20 }}>Browse for more</Title>
    </>
  );
}

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

export default Featured
