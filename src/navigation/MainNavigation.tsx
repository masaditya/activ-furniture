import React from 'react';
import {View, Text} from 'react-native-ui-lib';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/Home';
import {
  HOME_SCREEN,
  DETAIL_PRODUCT_SCREEN,
  PRODUCT_LIST_SCREEN,
} from './routename';
import DetailsScreen from '../screens/Details';
import Icon from 'react-native-vector-icons/Ionicons';
import {Button} from 'react-native-ui-lib';
import {RFValue} from 'react-native-responsive-fontsize';
import ProductListScreen from '../screens/ProductList';

const Drawer = createDrawerNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={HOME_SCREEN}>
        <Drawer.Screen
          options={{
            headerShown: true,
            headerTitle: 'FurniWorld',
            headerRight: (props: any) => (
              <View row>
                <Icon
                  style={{paddingHorizontal: 5}}
                  name="heart"
                  size={RFValue(25)}
                />
                <Icon
                  style={{paddingHorizontal: 5}}
                  name="cart"
                  size={RFValue(25)}
                />
              </View>
            ),
          }}
          name={HOME_SCREEN}
          component={HomeScreen}
        />
        <Drawer.Screen
          options={{
            headerShown: true,
            headerTitle: 'FurniWorld',
            headerRight: (props: any) => (
              <View row>
                <Icon
                  style={{paddingHorizontal: 5}}
                  name="heart"
                  size={RFValue(25)}
                />
                <Icon
                  style={{paddingHorizontal: 5}}
                  name="cart"
                  size={RFValue(25)}
                />
              </View>
            ),
          }}
          name={DETAIL_PRODUCT_SCREEN}
          component={DetailsScreen}
        />
        <Drawer.Screen
          options={{
            headerShown: true,
            headerTitle: 'Sofas',
            headerRight: (props: any) => (
              <View row>
                <Icon
                  style={{paddingHorizontal: 5}}
                  name="heart"
                  size={RFValue(25)}
                />
                <Icon
                  style={{paddingHorizontal: 5}}
                  name="cart"
                  size={RFValue(25)}
                />
              </View>
            ),
          }}
          name={PRODUCT_LIST_SCREEN}
          component={ProductListScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
