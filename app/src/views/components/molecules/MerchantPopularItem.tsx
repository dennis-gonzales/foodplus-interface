import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Title } from 'react-native-paper';

import Merchant from '../../../core/types/Merchant';

interface MerchantPopularProps {
  merchant: Merchant;
  onPress: () => void;
}

const MerchantPopularItem: React.FC<MerchantPopularProps> = ({ merchant, onPress }) => {
  const { name, logo, description } = merchant;

  return (
    <Card elevation={4} onPress={onPress}>
      <View />
      <Card.Cover style={styles.cardCover} source={{ uri: logo }} />
      <Card.Content style={styles.cardBottomContent}>
        <Title>{name}</Title>
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
