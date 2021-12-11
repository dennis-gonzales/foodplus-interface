import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Title } from 'react-native-paper';
import Product from '../../../core/types/Product';

interface ProductProps {
  product: Product;
  onPress: () => void;
}

const MerchantPopularItem: React.FC<ProductProps> = ({
  product,
  onPress,
}) => {
  const { title, image } = product;

  return (
    <Card elevation={4} onPress={onPress}>
      <View />
      <Card.Cover style={styles.cardCover} source={{ uri: image }} />
      <Card.Content style={styles.cardBottomContent}>
        <Title>{title}</Title>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
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
});

export default MerchantPopularItem;