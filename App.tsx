import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as StorePrivoder } from 'react-redux';
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { store } from './app/src/store';
import { appTheme, navigationTheme } from "./app/src/core/configs/theme";
import MainNavigator from './app/src/views/navigators/MainNavigator';

const App: React.FC = () => {
  
  return (
    <StorePrivoder store={store}>
      <PaperProvider theme={appTheme}>
      <NavigationContainer theme={navigationTheme}>
          <MainNavigator />
          <StatusBar style="auto" />
      </NavigationContainer>
    </PaperProvider>
    </StorePrivoder>
  );
}

export default App;