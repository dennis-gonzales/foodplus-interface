import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Avatar, Caption, Paragraph, Title } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { products } from './ListingsScreen';

import { useAppSelector } from '../../core/hooks/storeApi';
import { ScreenParamList } from '../../core/configs/routes';

import { selectAppTheme } from '../../store/slices/themeSlice';

interface ListingDetailsProps {
  route: RouteProp<ScreenParamList, 'ListingDetails'>;
  navigation: StackNavigationProp<ScreenParamList, 'ListingDetails'>;
}

const ListingDetails: React.FC<ListingDetailsProps> = ({
  route,
  navigation,
}) => {
  const appTheme = useAppSelector(state => selectAppTheme(state));
  
  const { productId } = route.params;

  const product = products.find(p => p.id === productId);

  if (!product) {
    throw new Error('Product not found!');
  }

  const { id, image, price, priceBeforeDiscount, title } = product;

  const listUserImage = {
    uri: 'https://randomuser.me/api/portraits/men/1.jpg',
  };

  return (
    <View>
      <Image style={styles.image} source={{ uri: image }} />

      <View style={styles.product}>
        <Title numberOfLines={1}>{title}</Title>
        <View style={{ flexDirection: "row" }}>
          <Caption>{priceBeforeDiscount}</Caption>
          <Paragraph style={{ color: appTheme.colors.primary }}>
            {price} USD
          </Paragraph>
        </View>
      </View>

      <View style={styles.user}>
        <Avatar.Image size={75} source={listUserImage} />
        <View style={styles.userInfo}>
          <Paragraph numberOfLines={1}>Dennis Gonzales</Paragraph>
          <Caption numberOfLines={1}>5 Listing(s)</Caption>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    marginBottom: 5,
    height: 300,
  },
  product: {
    marginHorizontal: 40,
    marginVertical: 5,
  },
  user: {
    marginHorizontal: 40,
    marginVertical: 40,
    flexDirection: 'row',
  },
  userInfo: {
    marginStart: 10,
    justifyContent: 'center',
  },
});

export default ListingDetails;
