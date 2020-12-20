import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import {Colors} from 'react-native-ui-lib';
import DetailsScreen from '../screens/Details';
import {DETAIL_PRODUCT_SCREEN} from './routename';

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
              tintColor={Colors.white}
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
