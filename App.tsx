import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { appTheme, navigationTheme } from "./src/core/configs/theme";
import MainNavigator from './src/views/navigations/MainNavigator';

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