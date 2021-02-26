import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions, ImageBackground, TouchableOpacity} from 'react-native';
import { RFValue} from 'react-native-responsive-fontsize';
import {View, Text, Colors} from 'react-native-ui-lib';
import {
  DETAIL_PRODUCT_SCREEN,
  PRODUCT_LIST_SCREEN,
} from '../../navigation/routename';

const BrandItem = (props?: any) => {
  const {navigate} = useNavigation();
  return (
    <View
      backgroundColor={Colors.white}
      padding-10
      style={{aspectRatio: 1, flex: 1 / 2}}>
      <TouchableOpacity
        onPress={() => {
          navigate(PRODUCT_LIST_SCREEN, {filter : {brand_id: props.brand_id}});
        }}>
        <ImageBackground
          source={{
            uri: props.brand_photo,
          }}
          imageStyle={{borderRadius: RFValue(10)}}
          style={{
            width: Dimensions.get('window').width / 2.5,
            height: 120,
            justifyContent: 'center',
          }}></ImageBackground>
        <Text numberOfLines={1} style={{padding: RFValue(5)}} font14bold>
          {props.brand_name}
        </Text>
        <Text
          style={{paddingHorizontal: RFValue(5)}}
          font10
          color={Colors.grey40}>
          {props.brand_info}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BrandItem;
