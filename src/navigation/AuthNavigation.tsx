import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LOGIN_SCREEN} from './routename';
import LoginScreen from '../screens/Auth/Login';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <NavigationContainer>
      
    </NavigationContainer>
  );
};

export default AuthNavigation;
