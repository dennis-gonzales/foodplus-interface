import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Button, Text, IconButton, Title, Paragraph, Subheading } from 'react-native-paper';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import { Image } from 'react-native-expo-image-cache';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { ScreenParamList } from '../../../src/core/configs/routes';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../src/core/hooks/storeApi';
import {
  selectProduct,
  selectSelectedProduct,
} from '../../../src/store/slices/productsSlice';
import { numberWithCommas } from '../../core/helpers/number';
import colors from '../../core/constants/colors';
import { increaseQuantity } from '../../store/slices/cartSlice';

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
        <Image
          style={styles.image}
          preview={require('../../../assets/fp-banner.png')}
          uri={image}
        />
      </View>

      <View style={styles.info}>
        <IconButton
          onPress={() => {}}
          icon={() => (
            <MaterialCommunityIcons
              color="white"
              name="heart-outline"
              size={24}
            />
          )}
          size={32}
          style={styles.heart}
        />

        <View style={styles.product}>
          <Title numberOfLines={1}>{title}</Title>


          <Subheading>Description</Subheading>
          <Paragraph numberOfLines={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula
            pellentesque magna, at molestie felis iaculis ac. Curabitur pretium
            blandit magna, vel accumsan nunc. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. In nec
            efficitur ante, quis efficitur felis. Quisque augue sem, tincidunt
            in eros eget, cursus sagittis quam.
          </Paragraph>
        </View>

        <View style={styles.action}>
          <Text style={styles.actionText}>{numberWithCommas(price)} PHP</Text>

          <Button
            color="white"
            icon={() => (
              <MaterialCommunityIcons
                color="white"
                name="cart-plus"
                size={24}
              />
            )}
            mode="text"
            onPress={() => dispatch(increaseQuantity(product))}
            style={styles.actionButton}
          >
            Add to Cart
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  action: {
    backgroundColor: colors.colorPrimaryYellowDark,
    borderRadius: 30,
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
    elevation: 2,
    paddingHorizontal: 4,
  },
  actionButton: {
    borderRadius: 30,
  },
  actionText: {
    marginLeft: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    height: Dimensions.get('window').height / 2,
    resizeMode: 'cover',
    backgroundColor: '#eee',
  },
  product: {
    marginHorizontal: 40,
    marginVertical: 5,
  },
  heart: {
    position: 'absolute',
    top: -30,
    right: 10,
    backgroundColor: 'dodgerblue',
    elevation: 5,
  },
  returnButton: {
    position: 'absolute',
    zIndex: 1,
    marginTop: Constants.statusBarHeight + 30,
    marginLeft: 15,
    borderRadius: 30,
  },
  info: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'white',
    flex: 1,
    marginTop: -30,
    justifyContent: 'space-between',
  },
  screen: {
    flex: 1,
  },
});

export default ListingDetailsContainer;
