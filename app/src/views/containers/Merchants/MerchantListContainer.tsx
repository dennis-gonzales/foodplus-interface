import React from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import { Caption, Card, Divider, Subheading, Text } from 'react-native-paper';
import { NavigationProp, useNavigation } from '@react-navigation/core';

import { useAppDispatch, useAppSelector } from '../../../core/hooks/storeApi';
import { ScreenParamList } from '../../../core/configs/routes';
import Featured from '../../components/organisms/Featured';

type MerchantListContainerProps = NavigationProp<ScreenParamList, any>;

const MerchantListContainer: React.FC = () => {
  const navigation = useNavigation<MerchantListContainerProps>();
  const dispatch = useAppDispatch();

  return (
    <FlatList
      data={[1, 2, 3, 4, 5]}
      keyExtractor={x => x.toString()}
      renderItem={({ item }) => (
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        >
          <Card elevation={4} onPress={() => {}}>
            <View style={styles.topContent}>
              <Subheading numberOfLines={1}>Category {item}</Subheading>

              <Caption numberOfLines={1}>Hello World</Caption>
            </View>

            <Divider />

            <View style={styles.middleContent}>
              <Image
                style={styles.productImage}
                source={{ uri: 'https://picsum.photos/200' }}
              />

              <View style={styles.middleContentText}>
                <Subheading style={styles.boldText} numberOfLines={2}>
                  Product {item}
                </Subheading>

                <Text style={styles.boldText}>
                  Price: <Text>{item} PHP</Text>
                </Text>

                <Text style={styles.boldText}>
                  Quantity: <Text>{item}</Text>
                </Text>
              </View>
            </View>
          </Card>
        </View>
      )}
      ListHeaderComponent={Featured}
    />
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

export default MerchantListContainer;
