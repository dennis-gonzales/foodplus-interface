import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Appbar, Text } from 'react-native-paper';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { MaterialIcons } from '@expo/vector-icons';

import { appTheme } from '../../core/configs/theme';
import { ScreenParamList } from '../../core/configs/routes';

type FatAppbarProp = NavigationProp<ScreenParamList, any>;

interface FatAppbarProps {
    title: string;
}

const FatAppbarLayout: React.FC<FatAppbarProps> = ({ title }) => {
  const navigation = useNavigation<FatAppbarProp>();

  return (
    <Appbar.Header style={styles.appbarHeader}>
      <Pressable
        onPress={() => navigation.goBack()}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? appTheme.colors.primary
              : appTheme.colors.background,
            borderColor: pressed ? appTheme.colors.background : 'transparent',
          },
          styles.goBack,
        ]}
      >
        {({ pressed }) => (
          <>
            <MaterialIcons name="arrow-back-ios" size={24} />
            <Text>Go back</Text>
          </>
        )}
      </Pressable>

      <Appbar.Content titleStyle={styles.titleStyle} title={title} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  appbarHeader: {
    paddingVertical: 50,
  },
  goBack: {
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 2,
    elevation: 2,
    flexDirection: 'row',
    marginLeft: 10,
    padding: 8,
    width: 100,
  },
  titleStyle: {
    textAlign: 'center',
  },
});

export default FatAppbarLayout;
