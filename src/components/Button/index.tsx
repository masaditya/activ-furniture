import React from 'react';
import {View, Text, Colors} from 'react-native-ui-lib';
import {Button as Btn} from 'react-native-ui-lib';
import color from '../Color';

type ButtonProps = {
  type: 'primary' | 'error';
  rounded?: boolean;
  title: string;
  outlined?: boolean;
  onPress: () => void;
  style?: object;
};

const Buttons = (props: ButtonProps) => {
  return (
    <>
      {props.outlined ? (
        <Btn
          style={{
            ...props.style,
          }}
          backgroundColor={Colors.white}
          outline
          fullWidth
          outlineColor={color.primary}
          outlineWidth={1}
          onPress={props.onPress}>
          <Text color={Colors.black}>{props.title}</Text>
        </Btn>
      ) : (
        <Btn
          style={{...props.style}}
          fullWidth
          backgroundColor={
            props.type === 'primary' ? color.primary : color.error
          }
          onPress={props.onPress}>
          <Text color={Colors.white}>{props.title}</Text>
        </Btn>
      )}
    </>
  );
};

export default Buttons;
