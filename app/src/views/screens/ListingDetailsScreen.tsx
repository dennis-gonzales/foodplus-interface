import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Avatar, Button, Caption, Paragraph, Title } from 'react-native-paper';
import Constants from 'expo-constants';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { ScreenParamList } from '../../core/configs/routes';
import { appTheme } from '../../core/configs/theme';
import { useAppDispatch, useAppSelector } from '../../core/hooks/storeApi';
import {
  selectProduct,
  selectSelectedProduct,
} from '../../store/slices/productsSlice';

interface ListingDetailsProps {
  route: RouteProp<ScreenParamList, 'ListingDetails'>;
  navigation: StackNavigationProp<ScreenParamList, 'ListingDetails'>;
}

const ListingDetails: React.FC<ListingDetailsProps> = ({
  route,
  navigation,
}) => {
  const dispatch = useAppDispatch();
  const product = useAppSelector(state => selectSelectedProduct(state));

  if (!product) {
    throw new Error('Product not found!');
  }

  const { id, image, price, title } = product;

  React.useEffect(() => {
    return () => {
      dispatch(selectProduct());
    };
  }, []);

  const listUserImage = {
    uri: 'https://randomuser.me/api/portraits/men/1.jpg',
  };

  return (
    <View style={styles.screen}>
      <View>
        <Button
          onPress={() => navigation.goBack()}
          style={styles.returnButton}
          mode="contained"
        >
          &lt; RETURN
        </Button>
        <Image style={styles.image} source={{ uri: image }} />
      </View>

      <View style={styles.product}>
        <Title numberOfLines={1}>{title}</Title>
        <View style={{ flexDirection: 'row' }}>
          <Caption>{price - 1}</Caption>
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
  returnButton: {
    position: 'absolute',
    zIndex: 1,
    marginTop: (Constants.statusBarHeight + 10),
    marginLeft: 10,
  },
  screen: {
    flex: 1,
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
