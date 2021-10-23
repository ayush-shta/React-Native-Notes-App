import React from 'react';
import {FAB} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

import style from './style';
import appTheme from '../../../../../../constants/app-theme';

const AddNoteFab = () => {
  const navigation = useNavigation<any>();

  const navigateToAddNote = () =>
    navigation.navigate('modal', {
      screen: 'addNote',
    });

  const AddIcon = () => <Icon name="plus" size={16} color={appTheme.white} />;

  return (
    <FAB
      placement={'right'}
      icon={<AddIcon />}
      color={appTheme.primary}
      onPress={navigateToAddNote}
    />
  );
};

export default AddNoteFab;
