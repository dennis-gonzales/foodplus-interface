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

interface ProductProps {
  title: string;
  priceBeforeDiscount: number;
  price: Number;
  imageUri: string;
}

const ProductWidget: React.FC<ProductProps> = ({
  title,
  priceBeforeDiscount,
  price,
  imageUri,
}) => {
  return (
    <Card elevation={4} style={styles.card}>
      <Card.Content style={styles.cardTopContent}>
        <IconButton
          color={appTheme.colors.primary}
          style={{ backgroundColor: appTheme.colors.background, elevation: 2, }}
          icon="heart-outline"
          size={24}
          onPress={() => {}}
        />
      </Card.Content>
      <Card.Cover style={styles.cardCover} source={{ uri: imageUri }} />
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
            style={{ backgroundColor: appTheme.colors.primary, }}
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
  card: {},
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
