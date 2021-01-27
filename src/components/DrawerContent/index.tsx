import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {View, Text, Image} from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/Ionicons';
import color from '../Color';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {
  ACCOUNT_SCREEN,
  BLOG_SCREEN,
  HOME_SCREEN,
  LOGIN_SCREEN,
} from '../../navigation/routename';

const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <View row centerV paddingV-40 paddingH-20>
        <Image
          style={{
            width: 70,
            height: 70,
            borderRadius: RFValue(10),
          }}
          source={{
            uri:
              'https://www.bdbpitmans.com/wp-content/uploads/placeholder-profile.png',
          }}
        />
        <View paddingL-10>
          <Text font18bold numberOfLines={1}>
            Albus Dumbledore
          </Text>
          <Text
            grey40
            onPress={() => props.navigation.navigate(ACCOUNT_SCREEN)}>
            View Profile
          </Text>
        </View>
      </View>
      <View paddingH-20>
        <View row paddingV-15 centerV>
          <Icon name="home" size={RFValue(20)} color={color.primary} />
          <Text
            style={{paddingLeft: RFValue(20)}}
            font16bold
            onPress={() => props.navigation.navigate(HOME_SCREEN)}>
            Home
          </Text>
        </View>
        <View row paddingV-15 centerV>
          <Icon name="book" size={RFValue(20)} color={color.primary} />
          <Text
            style={{paddingLeft: RFValue(20)}}
            font16bold
            onPress={() => props.navigation.navigate(BLOG_SCREEN)}>
            Blog
          </Text>
        </View>
        <View row paddingV-15 centerV>
          <Icon name="clipboard" size={RFValue(20)} color={color.primary} />
          <Text style={{paddingLeft: RFValue(20)}} font16bold>
            Term & Condition
          </Text>
        </View>
        <View row paddingV-15 centerV>
          <Icon name="help-circle" size={RFValue(20)} color={color.primary} />
          <Text style={{paddingLeft: RFValue(20)}} font16bold>
            Help
          </Text>
        </View>
        <View row paddingV-15 centerV>
          <Icon name="log-out" size={RFValue(20)} color={color.primary} />
          <Text
            style={{paddingLeft: RFValue(20)}}
            font16bold
            onPress={() => props.navigation.navigate(LOGIN_SCREEN)}>
            Logout
          </Text>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;