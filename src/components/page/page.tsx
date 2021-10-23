import React from 'react';
import {ColorValue, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import style from './style';
import appTheme from '../../constants/app-theme';

interface PageProps {
  children?: React.ReactNode;
  statusBarColor?: ColorValue;
  backgroundColor?: typeof appTheme;
}

const Page = (props: PageProps) => {
  const {
    children,
    statusBarColor = appTheme.white,
    backgroundColor = appTheme.white,
  } = props;

  // in IOS statusbar backgroundColor don't work so need to define background color in view
  const IOSBarStyle = (() => {
    if (backgroundColor === appTheme.primary) {
      return style.primaryBackground;
    }

    if (backgroundColor === appTheme.darkGray) {
      return style.darkBackground;
    }

    return style.whiteBackground;
  })();

  return (
    <SafeAreaView style={[style.container, IOSBarStyle]}>
      <StatusBar
        backgroundColor={statusBarColor}
        translucent
        barStyle={'light-content'}
      />
      {children}
    </SafeAreaView>
  );
};

export default Page;
