import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { appTheme, navigationTheme } from "./app/src/core/configs/theme";
import MainNavigator from './app/src/views/navigators/MainNavigator';

const App: React.FC = () => {
  
  return (
    <PaperProvider theme={appTheme}>
      <NavigationContainer theme={navigationTheme}>
          <MainNavigator />
          <StatusBar style="auto" />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;