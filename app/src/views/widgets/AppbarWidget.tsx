import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Appbar, Text } from 'react-native-paper';

import { useAppSelector, useAppDispatch } from '../../core/hooks/storeApi';
import { ScreenParamList } from '../../core/configs/routes';

import { selectUser } from '../../store/slices/userSlice';
import { selectAppTheme, toggleTheme } from '../../store/slices/themeSlice';

type AppbarNavigationProp = NavigationProp<ScreenParamList, any>;

interface AppbarProps {}

const AppbarWidget: React.FC<AppbarProps> = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<AppbarNavigationProp>();

  const firstName = useAppSelector(state => selectUser(state).firstName);
  const appTheme = useAppSelector(state => selectAppTheme(state));

  return (
    <Appbar.Header
      style={[
        styles.appbarHeader,
        { backgroundColor: appTheme.colors.background },
      ]}
    >
      <Appbar.Action icon="menu" onPress={() => dispatch(toggleTheme())} />
      <Appbar.Content title={<Text>Welcome, {firstName}.</Text>} />
      <Appbar.Action
        color={appTheme.colors.primary}
        icon="basket"
        onPress={() => navigation.navigate('Checkout')}
        style={styles.appbarBasket}
        size={30}
      />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  appbarHeader: {
    elevation: 0,
  },
  appbarBasket: {
    backgroundColor: "whitesmoke",
    elevation: 3,
    marginRight: 15,
  },
});

export default AppbarWidget;
