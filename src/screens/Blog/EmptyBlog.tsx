import React from 'react';
import {View, Text} from 'react-native-ui-lib';
import {Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const EmptyBlog = () => {
  return (
    <View flex-1 centerH centerV>
      <Image
        style={{width: RFValue(200), height: RFValue(200)}}
        source={{
          uri:
            'https://res.cloudinary.com/come0ver/image/upload/v1620520621/undraw_empty_street_sfxm_ibxors.png',
        }}
      />
      <Text marginT-20 font16bold green10>
        Tidak Ada Artikel Yang Tersedia
      </Text>
    </View>
  );
};

export default EmptyBlog;
