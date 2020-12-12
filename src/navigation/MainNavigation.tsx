import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/Home';
import {HOME_SCREEN, DETAIL_PRODUCT_SCREEN} from './routename';
import DetailsScreen from '../screens/Details';

const Drawer = createDrawerNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={HOME_SCREEN}>
        <Drawer.Screen name={HOME_SCREEN} component={HomeScreen} />
        <Drawer.Screen name={DETAIL_PRODUCT_SCREEN} component={DetailsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
