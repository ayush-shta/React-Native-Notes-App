import { StyleSheet } from 'react-native';

import appTheme from '../../constants/app-theme';


const style = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  whiteBackground: {
    backgroundColor: appTheme.white,
  },
  primaryBackground: {
    backgroundColor: appTheme.primary,
  },
  darkBackground: {
    backgroundColor: appTheme.black,
  },
});

export default style;
