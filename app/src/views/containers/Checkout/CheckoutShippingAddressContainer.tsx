import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/core';

import { useAppDispatch, useAppSelector } from '../../../core/hooks/storeApi';
import { ScreenParamList } from '../../../core/configs/routes';

import ShippingAddressCard from '../../components/molecules/ShippingAddressCard';

type AddressCardContainerProps = NavigationProp<ScreenParamList, any>;

const AddressCardContainer: React.FC = () => {
  const navigation = useNavigation<AddressCardContainerProps>();
  const dispatch = useAppDispatch();

  return (
    <View style={styles.card}>
      <ShippingAddressCard />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 10,
    paddingTop: 10,
  }
});

export default AddressCardContainer;
