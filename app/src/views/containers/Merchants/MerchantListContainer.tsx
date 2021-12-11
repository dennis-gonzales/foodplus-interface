import React from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import { Caption, Card, Divider, Subheading, Text } from 'react-native-paper';
import { NavigationProp, useNavigation } from '@react-navigation/core';

import { useAppDispatch, useAppSelector } from '../../../core/hooks/storeApi';
import { ScreenParamList } from '../../../core/configs/routes';
import Featured from '../../components/organisms/Featured';
import Merchant from '../../../core/types/Merchant';

type MerchantListContainerProps = NavigationProp<ScreenParamList, any>;

const sampleMerchantList: Merchant[] = [
  {
    name: 'McDonalds',
    description:
      "McDonald’s serves the world some of its favorite food like the Big Mac, Big n' Tasty, Quarter Pounder with Cheese, Cheeseburger, French Fries, Egg McMuffin, Apple Pie and Sundae. This is what we are famous for, globally and locally.",
    logo: 'https://www.freepnglogos.com/uploads/mcdonalds-png-logo/mcdonalds-png-logo-picture-3.png',
  },
  {
    name: 'Burger King',
    description:
      'Every day, more than 11 million guests visit Burger King restaurants around the world. And they do so because our restaurants are known for serving high-quality, great-tasting, and affordable food.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Burger_King_2020.svg/1200px-Burger_King_2020.svg.png',
  },
  {
    name: 'KFC',
    description: 'Kentucky Fried Chicken owes its delicious history to Harland David Sanders, its founder who is fondly referred to as “The Colonel”. Upon perfection of the Original Recipe that makes use of 11 secret herbs and spices, Colonel Sanders has brought the ultimate delight of chicken lovers to the world.',
    logo: 'https://corporate.kfc.com.ph/wp-content/themes/kfc/assets/images/logo.png',
  },
];

const MerchantListContainer: React.FC = () => {
  const navigation = useNavigation<MerchantListContainerProps>();
  const dispatch = useAppDispatch();

  return (
    <FlatList
      data={sampleMerchantList}
      keyExtractor={x => x.name}
      renderItem={({ item }) => (
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        >
          <Card elevation={4} onPress={() => {}}>
            <View style={styles.topContent}>
              <Subheading numberOfLines={1}> </Subheading>

              <Caption numberOfLines={1}>Rating unavailable</Caption>
            </View>

            <Divider />

            <View style={styles.middleContent}>
              <Image
                style={styles.productImage}
                source={{ uri: item.logo }}
              />

              <View style={styles.middleContentText}>
                <Subheading style={styles.boldText} numberOfLines={2}>
                  {item.name}
                </Subheading>

                <Text numberOfLines={3}>
                  {item?.description || 'Description unavailable'}
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
