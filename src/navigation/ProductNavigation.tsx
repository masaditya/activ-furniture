import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import {Colors} from 'react-native-ui-lib';
import color from '../components/Color';
import DetailsScreen from '../screens/Details';
import ReadBlogScreen from '../screens/ReadBlog';
import {DETAIL_PRODUCT_SCREEN, READ_BLOG_SCREEN} from './routename';

const Stack = createStackNavigator();

const ProductNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={({navigation}) => ({
          headerShown: true,

          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
          headerLeft: () => (
            <HeaderBackButton
              tintColor={color.primary}
              onPress={() => navigation.goBack()}
            />
          ),
          headerTitle: '',
          headerTransparent: true,
        })}
        name={DETAIL_PRODUCT_SCREEN}
        component={DetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default ProductNavigation;
