import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { ScreenParamList } from '../../../../src/core/configs/routes';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../src/core/hooks/storeApi';
import {
  toggleAllStatus,
  selectAllStatus,
  clearCart,
} from '../../../../src/store/slices/cartSlice';

import CartAction from '../../components/molecules/CartAction';

type CartActionContainerProps = NavigationProp<ScreenParamList, any>;

const CartActionContainer: React.FC = () => {
  const navigation = useNavigation<CartActionContainerProps>();
  const dispatch = useAppDispatch();
  const allStatus = useAppSelector(selectAllStatus);

  return (
    <CartAction
      status={allStatus}
      toggleStatus={() => dispatch(toggleAllStatus())}
      onClearPressed={() => dispatch(clearCart())}
    />
  );
};

const styles = StyleSheet.create({});

export default CartActionContainer;
