import React, {useCallback, useContext, useEffect} from 'react';
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
import {useAuthService} from '../../hook/services';
import {RootContext} from '../../context';
import {LOGOUT_SUCCESS} from '../../context/actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserAvatar from './UserAvatar';

const CustomDrawerContent = (props: any) => {
  // @ts-ignore

  // const {globalState, dispatch} = useContext(RootContext);

  // const {dispatch} = useContext(RootContext);
  // const {logoutUser} = useAuthService();

  // const actionLogout = useCallback(async () => {
  //   try {
  //     const res = await logoutUser();
  //     if (res) {
  //       dispatch({type: LOGOUT_SUCCESS});
  //     }
  //   } catch (error) {
  //   }
  // }, []);
  // useEffect(() => {
  //   // console.log(globalState);
  //   return () => {};
  // }, []);

  return (
    <DrawerContentScrollView {...props}>
      {/* <View row centerV paddingV-40 paddingH-20>
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
      </View> */}
      <UserAvatar />
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
        {/* <View row paddingV-15 centerV>
          <Icon name="log-out" size={RFValue(20)} color={color.primary} />
          <Text
            style={{paddingLeft: RFValue(20)}}
            font16bold
            onPress={async () => {
              // await AsyncStorage.removeItem('user');
              // dispatch({type: LOGOUT_SUCCESS});
            }}>
            Logout
          </Text>
        </View> */}
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
