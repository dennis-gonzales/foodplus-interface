import React from 'react';
import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

type ScreenProps = React.ComponentProps<typeof SafeAreaView>;

const SafeView: React.FC<ScreenProps> = props => {
  return (
    <SafeAreaView {...props} style={[styles.screen, props.style]}>
      <KeyboardAwareScrollView
        style={{ height: '100%' }}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-around',
        }}
      >
        {props.children}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: "space-around",
  },
});

export default SafeView;
