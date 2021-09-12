import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
import LottieView from 'lottie-react-native';

const LoadingListingsLayout: React.FC = () => {

  const renderNotFound = (): JSX.Element => {
    if (Platform.OS === 'android' || Platform.OS === 'ios') {
      /* licence: CC */
      /* Animation by WaqarBhi on Lottiefiles */
      /* https://lottiefiles.com/59301-burger-loader */
      return (
        <LottieView
          style={{ height: 350 }}
          source={require('../../../assets/animations/burger-loading.json')}
          autoPlay
          loop
        />
      );
    }
    return <></>;
  };

  return (
    <View style={styles.screen}>
      <View>
        {renderNotFound()}
        <Title style={styles.title}>
          Please wait while we get our goods
        </Title>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
    padding: 20,
  },
  title: {
      textAlign: 'center',
  },
});

export default LoadingListingsLayout;
