import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import {
  Caption,
  Card,
  Divider,
  Paragraph,
  Subheading,
  Text,
  Title,
} from 'react-native-paper';

import CartItem from '../../../core/types/CartItem';

interface ProductItemProps {
  item: CartItem;
  onItemPressed: (item: CartItem) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ item, onItemPressed }) => {
  const { category, description, image, price, rating, title } = item.product;

  return (
    <Card elevation={4} onPress={() => onItemPressed(item)}>
      <View style={styles.topContent}>
        <Subheading numberOfLines={1}>{category}</Subheading>

        <Caption numberOfLines={1}>
          Rating {rating.rate}({rating.count} reviews)
        </Caption>
      </View>

      <Divider />

      <View style={styles.middleContent}>
        <Image style={styles.productImage} source={{ uri: image }} />

        <View style={styles.middleContentText}>
          <Subheading style={styles.boldText} numberOfLines={2}>
            {title}
          </Subheading>

          <Text style={styles.boldText}>
            Price: <Text>{price} PHP</Text>
          </Text>

          <Text style={styles.boldText}>
            Quantity: <Text>{item.quantity}</Text>
          </Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  topContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 5,
  },
  middleContent: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 5,
    paddingHorizontal: 10,
  },
  middleContentText: {
    flex: 1,
    marginLeft: 10,
  },
  productImage: {
    width: 128,
    height: 128,
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default ProductItem;
