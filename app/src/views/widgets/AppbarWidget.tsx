import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar, Text } from 'react-native-paper';

import { appTheme } from '../../core/configs/theme';

interface AppbarProps {}

const AppbarWidget: React.FC<AppbarProps> = () => {
  return (
    <Appbar.Header style={styles.appbarheader}>
      <Appbar.Action icon="menu" onPress={() => {}} />
      <Appbar.Content title={<Text>Welcome, Chris.</Text>} />
      <Appbar.Action
        color={appTheme.colors.primary}
        icon="basket"
        onPress={() => {}}
        style={styles.appbarBasket}
        size={30}
      />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  appbarheader: {
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
