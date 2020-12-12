import React from 'react';
import {View, Text} from 'react-native-ui-lib';

const DescriptionInfo = (props: {field: string; value: string}) => {
  return (
    <View row flex-2>
      <View flex-1>
        <Text grey40>{props.field}</Text>
      </View>
      <View flex-1>
        <Text>{props.value}</Text>
      </View>
    </View>
  );
};

export default DescriptionInfo;
