import React from 'react';
import {View, Text, TextInput} from 'react-native';

import style from './style';
import appTheme from '../../constants/app-theme';

const sizeType = {
  large: 'large',
  small: 'small',
};

interface TextAreaProps {
  title: string;
  value: string;
  placeholder?: string;
  autoFocus?: boolean;
  onTextChange: Function;
  multiline?: boolean;
  size: keyof typeof sizeType;
}

const TextArea = (props: TextAreaProps) => {
  const {
    value,
    title,
    placeholder,
    onTextChange,
    autoFocus,
    size,
    multiline = true,
  } = props;

  const textWrapperStyle = (() => {
    if (size === 'large') {
      return style.largeTextWrapper;
    }
    if (size === 'small') {
      return style.smallTextWrapper;
    }
  })();

  return (
    <View style={style.container}>
      <Text style={style.titleText}>{title}</Text>
      <View style={textWrapperStyle}>
        <TextInput
          value={value}
          multiline={multiline}
          autoFocus={autoFocus}
          placeholder={placeholder}
          style={style.textAreaStyle}
          placeholderTextColor={appTheme.lightGray}
          onChangeText={(text: string) => onTextChange(text)}
        />
      </View>
    </View>
  );
};

export default TextArea;
