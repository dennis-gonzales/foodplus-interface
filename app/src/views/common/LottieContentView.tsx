import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import LottieView from 'lottie-react-native';

type LottieContentViewProps = React.ComponentPropsWithoutRef<typeof LottieView> & {
  topContent?: React.ReactNode;
  bottomContent?: React.ReactNode;
  lottieContainerStyle?: StyleProp<ViewStyle>;
};

const LottieContentView: React.FC<LottieContentViewProps> = ({
  topContent,
  bottomContent,
  lottieContainerStyle,
  ...lottieProps
}) => {

  return (
    <View style={[styles.lottieContainer, lottieContainerStyle]}>
      {topContent}
      <LottieView
        {...lottieProps}
        autoSize
        autoPlay
        loop
      />
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
});

export default LottieContentView;
