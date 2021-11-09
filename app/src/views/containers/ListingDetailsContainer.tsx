import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Avatar, Button, Caption, Paragraph, Title } from 'react-native-paper';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';

import { ScreenParamList } from '../../../src/core/configs/routes';
import { appTheme } from '../../../src/core/configs/theme';
import { useAppDispatch, useAppSelector } from '../../../src/core/hooks/storeApi';
import {
  selectProduct,
  selectSelectedProduct,
} from '../../../src/store/slices/productsSlice';

type ListingDetailsContainerProps = NavigationProp<ScreenParamList, any>;

const ListingDetailsContainer: React.FC = () => {
  const navigation = useNavigation<ListingDetailsContainerProps>();
  const dispatch = useAppDispatch();
  
  const product = useAppSelector(selectSelectedProduct);

  React.useEffect(() => {
    return () => {
      dispatch(selectProduct());
    };
  }, []);
  
  if (!product) {
    return <></>;
  }

  const { id, image, price, title } = product;

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
    marginTop: Constants.statusBarHeight + 30,
    marginLeft: 15,
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

export default ListingDetailsContainer;