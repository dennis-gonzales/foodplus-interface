import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

import SafeView from '../components/darkMatter/SafeView';

const AccountContainer: React.FC = () => {

  return (
    <SafeView>
      <Text>Account</Text>
    </SafeView>
  );
};

const styles = StyleSheet.create({});

export default AccountContainer;
