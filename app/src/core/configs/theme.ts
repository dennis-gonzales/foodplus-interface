import {
  DefaultTheme as DefaultNavigationTheme,
  DarkTheme as DarkNavigationTheme,
  Theme as NavigationTheme,
} from '@react-navigation/native';
import {
  DefaultTheme as DefaultAppTheme,
  DarkTheme as DarkAppTheme,
} from 'react-native-paper';
import colors from '../constants/colors';

const defaultAppTheme = {
  ...DefaultAppTheme,
  colors: {
    ...DefaultAppTheme.colors,
    primary: colors.colorPrimaryYellow,
    accent: colors.colorAccent,
    background: '#fff',
  },
  dark: false,
} as ReactNativePaper.Theme;

const darkAppTheme = {
  ...DarkAppTheme,
  colors: {
    ...DarkAppTheme.colors,
    primary: colors.colorPrimaryYellow,
    accent: colors.colorAccent,
    background: '#121212',
  },
  dark: true,
} as ReactNativePaper.Theme;

const defaultNavigationTheme = {
  ...DefaultNavigationTheme,
  colors: {
    ...DefaultNavigationTheme.colors,
    primary: colors.colorPrimaryYellow,
    background: '#fff',
  },
  dark: false,
} as NavigationTheme;

const darkNavigationTheme = {
  ...DarkNavigationTheme,
  colors: {
    ...DarkNavigationTheme.colors,
    primary: colors.colorPrimaryYellow,
    background: '#121212',
  },
  dark: true,
} as NavigationTheme;

export {
  defaultAppTheme,
  defaultNavigationTheme,
  darkAppTheme,
  darkNavigationTheme,
};
