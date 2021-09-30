import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Caption,
  Card,
  IconButton,
  Paragraph,
  Title,
} from 'react-native-paper';
import { NavigationProp, useNavigation } from '@react-navigation/core';

import { appTheme } from '../../core/configs/theme';
import { ScreenParamList } from '../../core/configs/routes';
import Product from '../../core/interfaces/Product';
import { useAppDispatch } from '../../core/hooks/storeApi';

import { selectProduct } from '../../store/slices/productsSlice';
import { addToCart } from '../../store/slices/cartSlice';

type ProductNavigationProp = NavigationProp<ScreenParamList, any>;

interface ProductProps {
  product: Product;
}

const ProductWidget: React.FC<ProductProps> = ({ product, }) => {
  
  const dispatch = useAppDispatch();
  const navigation = useNavigation<ProductNavigationProp>();
  
  const { id, title, price, image } = product;

  const handlePress = () => {
    dispatch(selectProduct(product));
    navigation.navigate('ListingDetails');
  }

  return (
    <Card elevation={4} style={styles.card} onPress={handlePress}>
      <Card.Content style={styles.cardTopContent}>
        <IconButton
          color={appTheme.colors.primary}
          style={{ backgroundColor: appTheme.colors.background, elevation: 2 }}
          icon="heart-outline"
          size={24}
          onPress={() => {}}
        />
      </Card.Content>
      <Card.Cover style={styles.cardCover} source={{ uri: image }} />
      <Card.Content style={styles.cardBottomContent}>
        <Title numberOfLines={2}>{title}</Title>
      </Card.Content>

      <Card.Content style={styles.cardActions}>
        <View style={styles.cardActionContent}>
          <View style={{ flexDirection: 'row' }}>
            <Caption>{price - 1}</Caption>
            <Paragraph style={{ color: appTheme.colors.primary }}>
              {price}
            </Paragraph>
          </View>

          <IconButton
            style={{ backgroundColor: appTheme.colors.primary }}
            color={appTheme.colors.text}
            icon="plus"
            onPress={() => dispatch(addToCart(product))}
            size={20}
          />
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 0,
    height: 260,
  },
  cardActions: {
    alignSelf: 'center',
    width: '100%',
  },
  cardActionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  cardBottomContent: {
    alignSelf: 'center',
  },
  cardCover: {
    alignSelf: 'center',
    borderRadius: 180,
    width: 120,
    height: 120,
    marginVertical: 10,
  },
  cardTopContent: {
    alignSelf: 'flex-end',
    position: 'absolute',
    zIndex: 1,
  },
});

export default ProductWidget;
