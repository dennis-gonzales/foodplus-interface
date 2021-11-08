import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
import LottieView from 'lottie-react-native';

interface LottieTitleViewProps {
  title: string;
  source: string;
}

const LottieTitleView: React.FC<LottieTitleViewProps> = ({ title, source }) => {
  return (
    <View style={styles.lottieContainer}>
      <LottieView style={styles.lottieView} source={source} autoPlay loop />

      <Title>{title}</Title>
    </View>
  );
};

const styles = StyleSheet.create({
  lottieContainer: {
    marginTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    display: 'flex',
    flex: 1,
  },
  lottieView: {
    height: 350,
  },
});

export default LottieTitleView;
