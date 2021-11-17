import React, {useCallback, useContext, useEffect, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {View, Text, Colors, Button} from 'react-native-ui-lib';
import color from '../../../components/Color';
import {HOME_SCREEN, REGISTER_SCREEN} from '../../../navigation/routename';
import {Input} from '@ui-kitten/components';
import {useAuthService} from '../../../hook/services';
import {RootContext} from '../../../context';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  ActivityIndicator,
  ToastAndroid,
  TouchableWithoutFeedback,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const LoginScreen = ({navigation}: any) => {
  const {loginUser, storeUsername, getUsername} = useAuthService();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  // @ts-ignore
  const {dispatch} = useContext(RootContext);
  // useEffect(() => {
  //   // if (checkUserdata()) navigation.navigate(HOME_SCREEN);
  //   return () => {};
  // }, []);

  // const checkUserdata = useCallback(async () => {
  //   const userdata = await getUsername();
  //   return userdata === null ? true : false;
  // }, []);

  const submitLogin = useCallback(async () => {
    setLoading(true);
    try {
      const res = await loginUser(username, password);
      console.log(res.data);
      if (res.data.status === 'sukses') {
        storeUsername(res.data.data[0]).then((result) => {
          dispatch(result);
        });
      } else {
        ToastAndroid.show(res.data.message, ToastAndroid.SHORT);
      }
    } catch (error) {}
    setLoading(false);
  }, [username, password]);

  const renderIcon = (props: any) => (
    <TouchableWithoutFeedback
      onPress={() => setSecureTextEntry(!secureTextEntry)}>
      <Icon
        name={secureTextEntry ? 'eye-off' : 'eye'}
        size={25}
        color={color.primary}
      />
    </TouchableWithoutFeedback>
  );

  return (
    <View flex-1 backgroundColor={Colors.white}>
      <ScrollView>
        <View backgroundColor={Colors.white} paddingT-40 paddingH-20>
          <Text font34bold>Welcome to</Text>
          <Text font34bold>
            <Text color={color.primary}>Wahana</Text> Furniture
          </Text>
        </View>
        <View backgroundColor={Colors.white} padding-30 marginT-10>
          <Text font16bold>Sign in with your account</Text>
          <View paddingV-20>
            <View paddingB-20>
              <Input
                label="Username"
                status="success"
                focusable
                value={username}
                onChangeText={(nextValue) => setUsername(nextValue)}
              />
            </View>
            <View paddingB-20>
              <Input
                label="Password"
                accessoryRight={renderIcon}
                secureTextEntry={secureTextEntry}
                status="success"
                value={password}
                onChangeText={(nextValue) => setPassword(nextValue)}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View flex-1 row spread style={{position: 'absolute', bottom: 0}}>
        <Button
          onPress={submitLogin}
          backgroundColor={color.primary}
          flex-1
          fullWidth>
          {loading && (
            <ActivityIndicator
              style={{paddingHorizontal: RFValue(10)}}
              size="small"
              color="#ffffff"
            />
          )}
          <Text font16 color={Colors.white}>
            Signin
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default LoginScreen;
