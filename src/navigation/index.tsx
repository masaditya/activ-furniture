import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import AuthNavigation from './AuthNavigation';
import MainNavigation from './MainNavigation';
import {AUTH_NAV, MAIN_NAV} from './routename';

const RootStack = createStackNavigator();

const RootNavigation = () => {
  
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen name={MAIN_NAV} component={MainNavigation} />
        <RootStack.Screen name={AUTH_NAV} component={AuthNavigation} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
