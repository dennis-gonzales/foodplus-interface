import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Caption,
  Card,
  IconButton,
  Paragraph,
  Subheading,
} from 'react-native-paper';

import { appTheme } from '../../../core/configs/theme';
import Product from '../../../core/types/Product';

interface ProductProps {
  product: Product;
  onAddToCartPressed: (product: Product) => void;
  onProductPressed: (product: Product) => void;
}

const ProductItem: React.FC<ProductProps> = ({
  product,
  onAddToCartPressed,
  onProductPressed,
}) => {
  const { id, title, price, image, category, description, rating } = product;

  return (
    <Card
      elevation={4}
      style={styles.card}
      onPress={() => onProductPressed(product)}
    >
      <Card.Content style={styles.cardTopContent}>
        <IconButton
          color={appTheme.colors.primary}
          style={{ backgroundColor: appTheme.colors.background, elevation: 2 }}
          icon="heart-outline"
          size={24}
          onPress={() => {}}
        />
      </Card.Content>

      <Card.Cover
        defaultSource={require('../../../../assets/adaptive-icon.png')}
        style={styles.cardCover}
        source={{ uri: image }}
      />

      <Card.Content style={styles.cardBottomContent}>
        <Subheading numberOfLines={2}>{title}</Subheading>
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
            onPress={() => onAddToCartPressed(product)}
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

export default ProductItem;
