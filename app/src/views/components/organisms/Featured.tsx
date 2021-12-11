import React from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Button, Divider, Title } from 'react-native-paper';
import { useAppSelector } from '../../../core/hooks/storeApi';
import { selectFeaturedMerchants } from '../../../store/slices/merchantsSlice';

import MerchantPopularItem from '../molecules/MerchantPopularItem';

const Featured: React.FC<{ onPress: () => void }> = ({ onPress }) => {

  const featuredMerchants = useAppSelector(selectFeaturedMerchants);

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
            onPress={onPress}
            mode="contained"
          >
            Let's Go!
          </Button>
        </ImageBackground>
      </View>

      <Title style={styles.title}>Popular Today</Title>

      <FlatList
        data={featuredMerchants}
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

      <Divider />

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
