import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LOGIN_SCREEN} from './routename';
import LoginScreen from '../screens/Auth/Login';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={LOGIN_SCREEN}>
        <Stack.Screen
          name={LOGIN_SCREEN}
          component={LoginScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigation;
