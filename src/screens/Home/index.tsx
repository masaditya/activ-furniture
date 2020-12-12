import React from 'react';
import {View, Text, Button} from 'react-native-ui-lib';
import Buttons from '../../components/Button';
import {DETAIL_PRODUCT_SCREEN} from '../../navigation/routename';

export default function HomeScreen({navigation}: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Buttons title="Hello" type="primary" onPress={() => {}}></Buttons>
    </View>
  );
}
