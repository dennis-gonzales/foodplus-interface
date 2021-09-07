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

const appTheme = {
  ...DefaultAppTheme,
  colors: {
    ...DefaultAppTheme.colors,
    primary: colors.colorPrimaryYellow,
    accent: colors.colorAccent,
    background: '#fff',
  },
} as ReactNativePaper.Theme;

const darkAppTheme = {
  ...DarkAppTheme,
  colors: {
    ...DarkAppTheme.colors,
    primary: colors.colorPrimaryYellow,
    accent: colors.colorAccent,
    background: '#121212',
  },
} as ReactNativePaper.Theme;

const navigationTheme = {
  ...DefaultNavigationTheme,
  colors: {
    ...DefaultNavigationTheme.colors,
    primary: colors.colorPrimaryYellow,
    background: '#fff',
  },
} as NavigationTheme;

const darkNavigationTheme = {
  ...DarkNavigationTheme,
  colors: {
    ...DarkNavigationTheme.colors,
    primary: colors.colorPrimaryYellow,
    background: '#121212',
  },
} as NavigationTheme;

export { appTheme, darkAppTheme, navigationTheme, darkNavigationTheme };
