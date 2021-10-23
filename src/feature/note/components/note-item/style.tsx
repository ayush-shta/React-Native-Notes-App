import {StyleSheet} from 'react-native';

import appTheme from '../../../../constants/app-theme';

const style = StyleSheet.create({
  container: {
    borderRadius: 8,
  },
  cardTitle: {
    flex: 1,
    marginRight: 8,
    color: appTheme.black,
  },
  cardDescription: {
    color: appTheme.darkGray,
  },
  cardTitleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionButtonWrapper: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  actionButton: {
    padding: 8,
    alignItems: 'center',
    fontWeight: 'bold',
  },
  favouriteButton: {
    color: appTheme.secondaryGold,
  },
  archiveButton: {
    color: appTheme.secondaryGreen,
  },
});

export default style;
