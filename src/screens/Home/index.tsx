import {Input} from '@ui-kitten/components';
import React from 'react';
import {ImageBackground} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {View, Text, Button, Image, Colors} from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/Ionicons';
import Buttons from '../../components/Button';
import color from '../../components/Color';
import {
  DETAIL_PRODUCT_SCREEN,
  PRODUCT_LIST_SCREEN,
} from '../../navigation/routename';

export default function HomeScreen({navigation}: any) {
  const tmp = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const tmp2 = [1, 2, 3, 4];

  return (
    <ScrollView>
      <Image
        style={{width: RFPercentage(100), height: RFValue(200)}}
        source={{
          uri:
            'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        }}
      />
      <View padding-20>
        <Input
          placeholder="Search Product"
          size="large"
          accessoryLeft={() => (
            <Icon name="search" size={RFValue(20)} color={Colors.grey40} />
          )}
          // onChangeText={(nextValue) => setValue(nextValue)}
        />
        <View row paddingT-10 spread centerV>
          <Text font14>Categories</Text>
          <Text font12 color={color.primary}>
            View All
          </Text>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {tmp.map((item) => {
            return (
              <View padding-10 key={item}>
                <TouchableOpacity
                  onPress={() => navigation.navigate(PRODUCT_LIST_SCREEN)}>
                  <Image
                    style={{
                      width: RFValue(100),
                      height: RFValue(100),
                      borderRadius: RFValue(10),
                    }}
                    source={{
                      uri:
                        'https://www.barkerandstonehouse.co.uk/images/uploaded/zoom/9STF3STRZINC_1_Zoom.jpg',
                    }}
                  />
                  <Text style={{padding: RFValue(5)}} font16bold>
                    Sofas
                  </Text>
                  <Text
                    style={{paddingHorizontal: RFValue(5)}}
                    font10
                    color={Colors.grey40}>
                    1984 items
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>

        <View row paddingT-10 spread centerV>
          <Text font14>Best Seller</Text>
          <Text font12 color={color.primary}>
            View All
          </Text>
        </View>

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
        {/* Product Row */}
        <View row>
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
        </View>
        {/* End Product Row */}
      </View>
    </ScrollView>
  );
}
