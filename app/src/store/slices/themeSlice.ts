import { createSlice } from '@reduxjs/toolkit';
import { Theme as NavigationTheme } from '@react-navigation/native';
import {
  defaultAppTheme,
  defaultNavigationTheme,
  darkAppTheme,
  darkNavigationTheme,
} from '../../core/configs/theme';

import { RootState } from '..';

export interface ThemeState {
  appTheme: ReactNativePaper.Theme;
  navigationTheme: NavigationTheme;
}

const initialState: ThemeState = {
  appTheme: darkAppTheme,
  navigationTheme: darkNavigationTheme,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.appTheme =
        state.appTheme === defaultAppTheme ? darkAppTheme : defaultAppTheme;

      state.navigationTheme =
        state.navigationTheme === defaultNavigationTheme
          ? darkNavigationTheme
          : defaultNavigationTheme;
    },
  },
});

export const { toggleTheme, } = themeSlice.actions;

export default themeSlice.reducer;

export const selectAppTheme = (state: RootState) => state.ui.theme.appTheme;
export const selectNavTheme = (state: RootState) => state.ui.theme.navigationTheme;
