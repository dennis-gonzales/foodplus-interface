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
        icon="basket"
        onPress={() => {}}
        color={appTheme.colors.primary}
      />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  appbarheader: {
    backgroundColor: appTheme.colors.background,
    elevation: 0,
  },
});

export default AppbarWidget;
