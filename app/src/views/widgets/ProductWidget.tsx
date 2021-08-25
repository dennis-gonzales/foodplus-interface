import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Caption,
  Card,
  IconButton,
  Paragraph,
  Title,
} from 'react-native-paper';

import { appTheme } from '../../core/configs/theme';
import Product from '../../core/interfaces/Product';

interface ProductProps {
  product: Product;
  onPress: (productId: number) => void;
}

const ProductWidget: React.FC<ProductProps> = ({ product, onPress }) => {
  const { id, title, priceBeforeDiscount, price, image } = product;

  return (
    <Card elevation={4} style={styles.card} onPress={() => onPress(id)}>
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
        <Title>{title}</Title>
      </Card.Content>

      <Card.Content style={styles.cardActions}>
        <View style={styles.cardActionContent}>
          <View style={{ flexDirection: 'row' }}>
            <Caption>{priceBeforeDiscount}</Caption>
            <Paragraph style={{ color: appTheme.colors.primary }}>
              {price}
            </Paragraph>
          </View>

          <IconButton
            style={{ backgroundColor: appTheme.colors.primary }}
            color={appTheme.colors.text}
            icon="plus"
            onPress={() => {}}
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
