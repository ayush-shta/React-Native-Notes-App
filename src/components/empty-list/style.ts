import {StyleSheet} from 'react-native';

import appTheme from '../../constants/app-theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  assetContainer: {
    alignItems: 'center',
  },
  imageAsset: {
    height: 350,
    width: 400,
  },
  textWrapper: {
    paddingTop: 16,
  },
  title: {
    textAlign: 'center',
    color: appTheme.darkGray,
  },
  description: {
    textAlign: 'center',
    color: appTheme.darkGray,
  },
});

export default styles;
