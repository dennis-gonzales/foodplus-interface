import {
  DefaultTheme as DefaultNavigationTheme,
  Theme as NavigationTheme,
} from '@react-navigation/native';
import { DefaultTheme as DefaultAppTheme } from 'react-native-paper';
import colors from '../constants/colors';

const appTheme = {
  ...DefaultAppTheme,
  colors: {
    ...DefaultAppTheme.colors,
    primary: colors.colorPrimaryYellow,
    accent: colors.colorAccent,
  },
};

const navigationTheme = {
  ...DefaultNavigationTheme,
  colors: {
    ...DefaultNavigationTheme.colors,
    primary: colors.colorPrimaryYellow,
    background: "#fff",
  },
} as NavigationTheme;

export { appTheme, navigationTheme };
