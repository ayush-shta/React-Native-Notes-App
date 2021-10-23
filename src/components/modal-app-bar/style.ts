import {StyleSheet} from 'react-native';

import appTheme from '../../constants/app-theme';

const style = StyleSheet.create({
  container: {
    height: 60,
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginBottom: 8,
    borderBottomWidth: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    alignContent: 'center',
    borderBottomColor: appTheme.border,
    justifyContent: 'space-between',
  },
  headerLabelContainer: {
    alignSelf: 'center',
    flex: 1,
  },
  headerWrapper: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  headerLabel: {
    fontSize: 18,
    lineHeight: 23,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: appTheme.black,
  },
  actionWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
  iconWrapper: {
    padding: 8,
  },
  icon: {
    color: appTheme.black,
  },
});

export default style;
