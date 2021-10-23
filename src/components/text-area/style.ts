import {StyleSheet} from 'react-native';

import appTheme from '../../constants/app-theme';

const style = StyleSheet.create({
  container: {
    padding: 18,
    backgroundColor: appTheme.white,
    borderColor: appTheme.lightGray,
    borderWidth: 0.3,
    borderRadius: 4,
  },
  smallTextWrapper: {
    minHeight: 50,
  },
  largeTextWrapper: {
    minHeight: 160,
  },
  titleText: {
    color: appTheme.darkGray,
    marginBottom: 8,
  },
  textAreaStyle: {
    flex: 1,
    color: appTheme.black,
  },
});

export default style;
