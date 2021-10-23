import {StyleSheet} from 'react-native';

import appTheme from '../../../../constants/app-theme';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  noteDescription: {
    flex: 1,
    padding: 16,
    color: appTheme.black,
  },
  editIcon: {
    color: appTheme.black,
  },
});

export default style;
