import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/core';

import { useAppDispatch, useAppSelector } from '../../../core/hooks/storeApi';
import { ScreenParamList } from '../../../core/configs/routes';

type FavouriteListingsContainerContainerProps = NavigationProp<
  ScreenParamList,
  any
>;

const FavouriteListingsContainerContainer: React.FC = () => {
  const navigation = useNavigation<FavouriteListingsContainerContainerProps>();
  const dispatch = useAppDispatch();

  return <View />;
};

const styles = StyleSheet.create({});

export default FavouriteListingsContainerContainer;
