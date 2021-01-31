import React from 'react';
import {View, Text} from 'react-native-ui-lib';
import {Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const EmptyProduct = () => {
  return (
    <View flex-1 centerH centerV>
      <Image
        style={{width: RFValue(200), height: RFValue(200)}}
        source={{
          uri:
            'https://res.cloudinary.com/come0ver/image/upload/v1612006924/undraw_empty_xct9_i20ibe.png',
        }}
      />
      <Text marginT-20 font16bold green10>
        Product Not Found
      </Text>
    </View>
  );
};

export default EmptyProduct;
