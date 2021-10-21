import {StyleSheet} from 'react-native';

import appTheme from '../../../constants/app-theme';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  iconTab: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  tabBar: {
    borderTopWidth: 1,
    flexDirection: 'row',
    borderTopColor: appTheme.border,
  },
  iconFocused: {
    color: appTheme.primary,
    size: 24,
    focused: true,
  },
  iconNotFocused: {
    color: appTheme.darkGray,
    size: 22,
    focused: false,
  },
  labelFocused: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '700',
    fontStyle: 'normal',
    color: appTheme.primary,
  },
  labelNotFocused: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    color: appTheme.darkGray,
  },
});

export default style;
