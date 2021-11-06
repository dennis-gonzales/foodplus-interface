import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet } from "react-native";

type ScreenProps = React.ComponentProps<typeof SafeAreaView>;

const SafeView: React.FC<ScreenProps> = (props) => {
  return (
    <SafeAreaView
      {...props}
      style={[styles.screen, props.style]}
    >
      {props.children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default SafeView;