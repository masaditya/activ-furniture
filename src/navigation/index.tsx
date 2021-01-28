import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useCallback, useContext} from 'react';
import {View, Text} from 'react-native';
import {RootContext} from '../context';
import {useAuthService} from '../hook/services';
import AuthNavigation from './AuthNavigation';
import MainNavigation from './MainNavigation';
import {AUTH_NAV, MAIN_NAV} from './routename';

const RootStack = createStackNavigator();

const RootNavigation = () => {
  // @ts-ignore
  const {globalState, dispatch} = useContext(RootContext);
  const {getUsername} = useAuthService();

  React.useEffect(() => {
    getGlobal();

    getUsername().then((res) => {
      console.log(res);
      dispatch(res);
    });
    // console.log(globalState);
  }, []);

  const getGlobal = useCallback(async () => {
    let a = await globalState;
    console.log(a);
  }, []);

  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" headerMode={'none'}>
        {!globalState.isSignout ? (
          <RootStack.Screen name={MAIN_NAV} component={MainNavigation} />
        ) : (
          <RootStack.Screen name={AUTH_NAV} component={AuthNavigation} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
