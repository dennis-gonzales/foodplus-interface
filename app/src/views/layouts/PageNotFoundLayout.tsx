import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Button, Title } from 'react-native-paper';
import LottieView from 'lottie-react-native';
import { NavigationProp, useNavigation } from '@react-navigation/core';

import { ScreenParamList } from '../../core/configs/routes';

type PageNotFoundProp = NavigationProp<ScreenParamList, any>;

const PageNotFoundLayout: React.FC = () => {
  const navigation = useNavigation<PageNotFoundProp>();

  const renderNotFound = (): JSX.Element => {
    if (Platform.OS === 'android' || Platform.OS === 'ios') {
      /* licence: CC */
      /* Animation by Emas Didik Prasetyo on Lottiefiles */
      /* https://lottiefiles.com/58718-404-error-page */
      return (
        <LottieView
          style={{ height: 350 }}
          source={require('../../../assets/animations/404-error-page.json')}
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
          Page not found, that's all we know...
        </Title>
      </View>

      <Button
        contentStyle={styles.returnButtonContent}
        style={styles.returnButton}
        mode="contained"
        onPress={() => navigation.goBack()}
      >
        RETURN
      </Button>
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

export default PageNotFoundLayout;
