import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {View, Text, Colors, Button} from 'react-native-ui-lib';
import color from '../../../components/Color';
import {HOME_SCREEN, REGISTER_SCREEN} from '../../../navigation/routename';
import {Input} from '@ui-kitten/components';

const LoginScreen = ({navigation}: any) => {
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
                label="Email or Phone Number"
                status="success"
                focusable
                // onChangeText={(nextValue) => setValue(nextValue)}
              />
            </View>
            <View paddingB-20>
              <Input
                label="Password"
                secureTextEntry
                status="success"
                // onChangeText={(nextValue) => setValue(nextValue)}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View flex-1 row spread style={{position: 'absolute', bottom: 0}}>
        <Button
          onPress={() => navigation.navigate(HOME_SCREEN)}
          backgroundColor={color.primary}
          flex-1
          fullWidth>
          <Text font16 color={Colors.white}>
            Signin
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default LoginScreen;
