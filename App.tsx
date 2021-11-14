import React from 'react';
import { configureFonts, Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useNetInfo } from '@react-native-community/netinfo';
import { Fonts } from 'react-native-paper/lib/typescript/types';
import {
  Ubuntu_300Light,
  Ubuntu_300Light_Italic,
  Ubuntu_400Regular,
  Ubuntu_400Regular_Italic,
  Ubuntu_500Medium,
  Ubuntu_500Medium_Italic,
  Ubuntu_700Bold,
  Ubuntu_700Bold_Italic,
  useFonts,
} from '@expo-google-fonts/ubuntu';
import AppLoading from 'expo-app-loading';
import Toast, { SuccessToast, BaseToastProps } from 'react-native-toast-message';

import { store } from './app/src/store';
import { appTheme, navigationTheme } from './app/src/core/configs/theme';
import MainNavigator from './app/src/views/navigators/MainNavigator';
import OfflineNotice from './app/src/views/common/OfflineNotice';

const fontConfig = {
  web: {
    regular: {
      fontFamily: 'Ubuntu_400Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Ubuntu_500Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Ubuntu_300Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Ubuntu_300Light',
      fontWeight: 'normal',
    },
  } as Fonts,
  ios: {
    regular: {
      fontFamily: 'Ubuntu_400Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Ubuntu_500Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Ubuntu_300Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Ubuntu_300Light',
      fontWeight: 'normal',
    },
  } as Fonts,
  android: {
    regular: {
      fontFamily: 'Ubuntu_400Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Ubuntu_500Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Ubuntu_300Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Ubuntu_300Light',
      fontWeight: 'normal',
    },
  } as Fonts,
};

const App: React.FC = () => {
  const netInfo = useNetInfo();

  const [fontsLoaded, error] = useFonts({
    Ubuntu_300Light,
    Ubuntu_400Regular,
    Ubuntu_500Medium,
  });

  if (error) {
    console.error({ fontError: error });
  }

  const noInternet =
    netInfo.type !== 'unknown' && netInfo.isInternetReachable === false;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <StoreProvider store={store}>
        <PaperProvider
          theme={{ ...appTheme, fonts: configureFonts(fontConfig) }}
        > 
          {noInternet && <OfflineNotice />}
          <StatusBar style="auto" />
          <NavigationContainer theme={navigationTheme}>
            <MainNavigator />
          </NavigationContainer>
          <Toast topOffset={noInternet ? 100 : 40} />
        </PaperProvider>
      </StoreProvider>
    );
  }
};

export default App;
