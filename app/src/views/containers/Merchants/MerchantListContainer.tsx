import React from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import { Caption, Card, Divider, Subheading, Text } from 'react-native-paper';
import { NavigationProp, useNavigation } from '@react-navigation/core';

import { useAppDispatch, useAppSelector } from '../../../core/hooks/storeApi';
import { ScreenParamList } from '../../../core/configs/routes';
import Featured from '../../components/organisms/Featured';
import Merchant from '../../../core/types/Merchant';
import { loadMerchants, selectMerchants } from '../../../store/slices/merchantsSlice';

type MerchantListContainerProps = NavigationProp<ScreenParamList, any>;


const MerchantListContainer: React.FC = () => {
  const navigation = useNavigation<MerchantListContainerProps>();
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(loadMerchants());
  }, []);

  const merchants = useAppSelector(selectMerchants);

  return (
    <FlatList
      data={merchants}
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
      ListHeaderComponent={<Featured onPress={() => navigation.navigate('MerchantListings')} />}
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
