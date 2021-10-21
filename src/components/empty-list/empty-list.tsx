import React from 'react';
import {Image, ImageSourcePropType, Text, View} from 'react-native';

import style from './style';

interface EmptyListProps {
  imageSource: ImageSourcePropType;
  description: string;
}

const EmptyList = (props: EmptyListProps) => {
  const {imageSource, description} = props;

  return (
    <View style={style.container}>
      <View style={style.assetContainer}>
        <Image source={imageSource} style={style.imageAsset} />
      </View>
      <View style={style.textWrapper}>
        <Text style={style.title}> {description}</Text>
      </View>
    </View>
  );
};

export default EmptyList;
