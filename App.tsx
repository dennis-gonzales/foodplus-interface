import React from 'react';
import { configureFonts, Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useNetInfo } from '@react-native-community/netinfo';
import {
  Ubuntu_300Light,
  Ubuntu_400Regular,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
  useFonts,
} from '@expo-google-fonts/ubuntu';
import AppLoading from 'expo-app-loading';
import Toast from 'react-native-toast-message';
import numbro from 'numbro';

import { store } from './app/src/store';
import { appTheme, navigationTheme } from './app/src/core/configs/theme';
import fontConfig from './app/src/core/configs/fonts';

import OfflineNotice from './app/src/views/common/OfflineNotice';
import NavigatorsMediator from './app/src/views/navigators/NavigatorsMediator';

numbro.setLanguage('en-US');

const App: React.FC = () => {
  const netInfo = useNetInfo();

  const [fontsLoaded, error] = useFonts({
    Ubuntu_300Light,
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
  });

  if (error) {
    console.error({ fontError: error });
  }

  const noInternet =
    netInfo.type !== 'unknown' && netInfo.isInternetReachable === false;


  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <StoreProvider store={store}>
      <PaperProvider theme={{ ...appTheme, fonts: configureFonts(fontConfig) }}>
        {noInternet && <OfflineNotice />}
        <StatusBar style="auto" />
        <NavigationContainer theme={navigationTheme}>
          <NavigatorsMediator />
        </NavigationContainer>
        <Toast topOffset={noInternet ? 100 : 40} />
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
