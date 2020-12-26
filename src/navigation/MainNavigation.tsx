import React from 'react';
import {View, Text} from 'react-native-ui-lib';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import HomeScreen from '../screens/Home';
import {
  HOME_SCREEN,
  DETAIL_PRODUCT_SCREEN,
  PRODUCT_LIST_SCREEN,
  LOGIN_SCREEN,
  ACCOUNT_SCREEN,
  REGISTER_SCREEN,
  BLOG_SCREEN,
  READ_BLOG_SCREEN,
} from './routename';
import DetailsScreen from '../screens/Details';
import Icon from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize';
import ProductListScreen from '../screens/ProductList';
import LoginScreen from '../screens/Auth/Login';
import {Colors} from 'react-native-ui-lib';
import {HeaderBackButton} from '@react-navigation/stack';
import AccountScreen from '../screens/Account';
import RegisterScreen from '../screens/Auth/Register';
import ProductNavigation from './ProductNavigation';
import BlogScreen from '../screens/Blog';
import ReadBlogScreen from '../screens/ReadBlog';
import CustomDrawerContent from '../components/DrawerContent/index';

const Drawer = createDrawerNavigator();

export default function MainNavigation(props: any) {
  const mainHeaderOptions = {
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
    },
    headerShown: true,
    headerTitle: 'Wahana Furniture',
    headerRight: (props: any) => (
      <Icon style={{paddingHorizontal: 5}} name="person" size={RFValue(25)} />
    ),
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={CustomDrawerContent}
        initialRouteName={LOGIN_SCREEN}>
        <Drawer.Screen
          name={LOGIN_SCREEN}
          component={LoginScreen}
          options={{headerShown: false, gestureEnabled: false}}
        />
        <Drawer.Screen
          name={REGISTER_SCREEN}
          component={RegisterScreen}
          options={({navigation}) => ({
            ...mainHeaderOptions,
            gestureEnabled: false,
            headerTitle: '',
            headerRight: () => null,
            headerLeft: (props) => (
              <HeaderBackButton onPress={() => navigation.goBack()} />
            ),
          })}
        />
        <Drawer.Screen
          options={mainHeaderOptions}
          name={HOME_SCREEN}
          component={HomeScreen}
        />
        <Drawer.Screen
          options={({navigation}) => ({
            headerShown: true,
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
            },
            headerLeft: () => (
              <HeaderBackButton onPress={() => navigation.goBack()} />
            ),
            headerTitle: '',
          })}
          name={DETAIL_PRODUCT_SCREEN}
          component={DetailsScreen}
        />
        <Drawer.Screen name="Product" component={ProductNavigation} />
        <Drawer.Screen
          options={({navigation}) => ({
            ...mainHeaderOptions,
            gestureEnabled: false,
            headerLeft: (props) => (
              <HeaderBackButton onPress={() => navigation.goBack()} />
            ),
          })}
          name={PRODUCT_LIST_SCREEN}
          component={ProductListScreen}
        />
        <Drawer.Screen
          options={{
            ...mainHeaderOptions,
            headerTitle: 'My Profile',
            headerRight: () => null,
          }}
          name={ACCOUNT_SCREEN}
          component={AccountScreen}
        />
        <Drawer.Screen
          options={{
            ...mainHeaderOptions,
            headerTitle: 'News',
            headerRight: () => null,
          }}
          name={BLOG_SCREEN}
          component={BlogScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
