import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {View, Text, Button, Colors} from 'react-native-ui-lib';
import color from '../Color';

const TagLabel = (props: {
  value: string;
  isActive: boolean;
  onPress?: () => void;
}) => {
  return (
    <Button
      onPress={props.onPress}
      style={{width: 'auto', borderRadius: RFValue(10)}}
      margin-5
      outlineColor={!props.isActive ? Colors.grey50 : color.primary}
      backgroundColor={props.isActive ? color.primary : Colors.white}
      fullWidth>
      <Text font10 color={props.isActive ? Colors.white : Colors.black}>
        {props.value}
      </Text>
    </Button>
  );
};

export default TagLabel;
