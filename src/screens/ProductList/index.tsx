import React from 'react';
import {ImageBackground, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {View, Text, Colors} from 'react-native-ui-lib';
import {DETAIL_PRODUCT_SCREEN} from '../../navigation/routename';

const ProductListScreen = ({navigation}: any) => {
  return (
    <View paddingH-20>
      <ScrollView>
        <View row>
          <View padding-10 width="50%" style={{borderRadius: RFValue(20)}}>
            <TouchableOpacity
              onPress={() => navigation.navigate(DETAIL_PRODUCT_SCREEN)}>
              <ImageBackground
                source={{
                  uri:
                    'https://www.barkerandstonehouse.co.uk/images/uploaded/zoom/9STF3STRZINC_1_Zoom.jpg',
                }}
                style={{
                  width: RFPercentage(20),
                  height: RFValue(100),
                  borderRadius: RFValue(20),
                  justifyContent: 'center',
                }}></ImageBackground>
              <Text style={{padding: RFValue(5)}} font16bold>
                Dinner table
              </Text>
              <Text
                style={{paddingHorizontal: RFValue(5)}}
                font10
                color={Colors.grey40}>
                $ 120.000
              </Text>
            </TouchableOpacity>
          </View>
          <View padding-10 width="50%" style={{borderRadius: RFValue(20)}}>
            <TouchableOpacity
              onPress={() => navigation.navigate(DETAIL_PRODUCT_SCREEN)}>
              <ImageBackground
                source={{
                  uri:
                    'https://images.unsplash.com/photo-1544207240-4193795530ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=914&q=80',
                }}
                style={{
                  width: RFPercentage(20),
                  height: RFValue(100),
                  borderRadius: RFValue(20),
                  justifyContent: 'center',
                }}></ImageBackground>
              <Text style={{padding: RFValue(5)}} font16bold>
                Dinner table
              </Text>
              <Text
                style={{paddingHorizontal: RFValue(5)}}
                font10
                color={Colors.grey40}>
                $ 120.000
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductListScreen;
