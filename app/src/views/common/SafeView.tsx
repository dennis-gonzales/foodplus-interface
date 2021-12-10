import React from 'react';
import Constants from 'expo-constants';
import { Keyboard, SafeAreaView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

type ScreenProps = React.ComponentProps<typeof SafeAreaView>;

const SafeView: React.FC<ScreenProps> = props => {
  return (
    <SafeAreaView {...props} style={[styles.screen, props.style]}>
      {/* <KeyboardAwareScrollView
        style={{ backgroundColor: '#4c69a5' }}
        // resetScrollToCoords={{ x: 0, y: 0 }}
        // scrollEnabled={false}
        contentContainerStyle={{
          backgroundColor: '#4c69a5',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      > */}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>{props.children}</View>
        </TouchableWithoutFeedback>
      {/* </KeyboardAwareScrollView> */}
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
