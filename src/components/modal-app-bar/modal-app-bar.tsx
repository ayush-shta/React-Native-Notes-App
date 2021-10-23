import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {View, Text, TouchableOpacity} from 'react-native';

import style from './style';

interface StateProps {
  title: string;
  children?: React.ReactNode;
}

const ModalAppBar = (props: StateProps) => {
  const {children, title} = props;

  const navigation = useNavigation();

  const navigateBack = () => navigation.goBack();

  const BackButtonIcon = () => (
    <TouchableOpacity onPress={navigateBack} style={style.iconWrapper}>
      <Icon name="arrowleft" size={24} style={style.icon} />
    </TouchableOpacity>
  );

  return (
    <View style={style.container}>
      <View style={style.headerWrapper}>
        <BackButtonIcon />
        <View style={style.headerLabelContainer}>
          <Text numberOfLines={1} style={style.headerLabel}>
            {title}
          </Text>
        </View>
      </View>
      {children && <View style={style.actionWrapper}>{children}</View>}
    </View>
  );
};

export default ModalAppBar;
