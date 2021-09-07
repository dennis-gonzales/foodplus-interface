import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Appbar, Text } from 'react-native-paper';

import { appTheme } from '../../core/configs/theme';
import { useAppSelector } from '../../core/hooks/storeApi';
import { ScreenParamList } from '../../core/configs/routes';

import { selectUser } from '../../store/features/userSlice';

type AppbarNavigationProp = NavigationProp<ScreenParamList, any>;

interface AppbarProps {}

const AppbarWidget: React.FC<AppbarProps> = () => {
  const navigation = useNavigation<AppbarNavigationProp>();

  const firstName = useAppSelector(state => selectUser(state).firstName);

  return (
    <Appbar.Header style={styles.appbarHeader}>
      <Appbar.Action icon="menu" onPress={() => {}} />
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
    backgroundColor: appTheme.colors.background,
    elevation: 0,
  },
  appbarBasket: {
    backgroundColor: "whitesmoke",
    elevation: 3,
    marginRight: 15,
  },
});

export default AppbarWidget;
