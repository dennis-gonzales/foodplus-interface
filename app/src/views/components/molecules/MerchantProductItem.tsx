import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import {
  Caption,
  Card,
  IconButton,
  Paragraph,
  Subheading,
} from 'react-native-paper';

import { appTheme } from '../../../core/configs/theme';
import Product from '../../../core/types/Product';

interface MerchantProductItemProps {
  product: Product;
  onAddToCartPressed: (product: Product) => void;
  onProductPressed: (product: Product) => void;
}

const MerchantProductItem: React.FC<MerchantProductItemProps> = ({
  product,
  onAddToCartPressed,
  onProductPressed,
}) => {
  const { title, price, image } = product;

  return (
    <Card
      elevation={4}
      style={styles.card}
      onPress={() => onProductPressed(product)}
    >
      <View style={{ flex: 1, justifyContent: 'space-around' }}>
        <Card.Content style={styles.cardTopContent}>
          <IconButton
            color={appTheme.colors.primary}
            style={{
              backgroundColor: appTheme.colors.background,
              elevation: 2,
            }}
            icon="heart-outline"
            size={24}
            onPress={() => {}}
          />
        </Card.Content>

        <Image style={styles.cardCover} source={{ uri: image }} />

        <Card.Content style={styles.cardBottomContent}>
          <Subheading numberOfLines={2}>{title}</Subheading>
        </Card.Content>

        <Card.Content>
          <View style={styles.cardActionContent}>
            <Paragraph
              numberOfLines={1}
              style={{ color: appTheme.colors.primary }}
            >
              {price.toFixed(2)} Php
            </Paragraph>

            <IconButton
              style={{ backgroundColor: appTheme.colors.primary }}
              color={appTheme.colors.text}
              icon="plus"
              onPress={() => onAddToCartPressed(product)}
              size={20}
            />
          </View>
        </Card.Content>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 240,
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

export default MerchantProductItem;
