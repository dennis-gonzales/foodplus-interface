import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { ScreenParamList } from '../../../../src/core/configs/routes';
import {
  useAppDispatch,
} from '../../../../src/core/hooks/storeApi';

type CartActionContainerProps = NavigationProp<ScreenParamList, any>;

const CartActionContainer: React.FC = () => {
  const navigation = useNavigation<CartActionContainerProps>();
  const dispatch = useAppDispatch();

  return null;

  // return (
  //   <CartAction
  //     status={allStatus}
  //     toggleStatus={() => dispatch(toggleAllStatus())}
  //     onClearPressed={() => dispatch(clearCart())}
  //   />
  // );
};

const styles = StyleSheet.create({});

export default CartActionContainer;
