import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import LottieView from 'lottie-react-native';

interface LottieContentViewProps {
  source: string;
  topContent?: React.ReactNode;
  bottomContent?: React.ReactNode;
  lottieContainerStyle?: StyleProp<ViewStyle>;
}

const LottieContentView: React.FC<LottieContentViewProps> = ({
  source,
  topContent,
  bottomContent,
  lottieContainerStyle,
}) => {

  return (
    <View style={[styles.lottieContainer, lottieContainerStyle]}>
      {topContent}
      <LottieView style={styles.lottieView} source={source} autoPlay loop />
      {bottomContent}
    </View>
  );
};

const styles = StyleSheet.create({
  lottieContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    display: 'flex',
    flex: 1,
  },
  lottieView: {
    height: 350,
  },
});

export default LottieContentView;
