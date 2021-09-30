import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
import LottieView from 'lottie-react-native';

const NoResultsLayout: React.FC = () => {

  const renderNoResults = (): JSX.Element => {
    if (Platform.OS === 'android' || Platform.OS === 'ios') {
      /* licence: CC */
      /* Animation by Hoai Le Lottiefiles */
      /* https://lottiefiles.com/629-empty-box */
      return (
        <LottieView
          style={{ height: 350 }}
          source={require('../../../assets/animations/empty-box.json')}
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
        {renderNoResults()}
        <Title style={styles.title}>
          No results found
        </Title>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  returnButton: {
    borderRadius: 10,
  },
  returnButtonContent: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  screen: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
  },
  title: {
    textAlign: 'center',
    marginHorizontal: 20,
  },
});

export default NoResultsLayout;
