import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {View, Text, Colors, Button} from 'react-native-ui-lib';
import color from '../../../components/Color';
import {HOME_SCREEN} from '../../../navigation/routename';
import {Input} from '@ui-kitten/components';

const LoginScreen = ({navigation}: any) => {
  return (
    <View flex-1 backgroundColor={Colors.white}>
      <ScrollView>
        <View backgroundColor={Colors.white} paddingT-40 paddingH-20>
          <Text font34bold>Welcome to</Text>
          <Text font34bold>
            Furni <Text color={color.primary}>World</Text>
          </Text>
          <View marginT-40>
            <Text color={Colors.grey40}>Continue with social account</Text>
            <View flex-2 row paddingV-20>
              <Button
                marginH-10
                outlineColor={color.primary}
                backgroundColor={Colors.white}
                flex-1
                fullWidth>
                <Text color={Colors.black}>Facebook</Text>
              </Button>
              <Button
                marginH-10
                outlineColor={color.primary}
                backgroundColor={Colors.white}
                flex-1
                fullWidth>
                <Text color={Colors.black}>Google</Text>
              </Button>
            </View>
          </View>
        </View>
        <View backgroundColor={Colors.white} padding-30 marginT-10>
          <Text font16bold>Or Sign in with your account</Text>
          <View paddingV-20>
            <View paddingB-20>
              <Input
                label="Email or Phone Number"
                status="basic"
                focusable
                // onChangeText={(nextValue) => setValue(nextValue)}
              />
            </View>
            <View paddingB-20>
              <Input
                label="Password"
                secureTextEntry
                status="basic"
                // onChangeText={(nextValue) => setValue(nextValue)}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View flex-2 row spread style={{position: 'absolute', bottom: 0}}>
        <Button backgroundColor={Colors.white} flex-1 fullWidth>
          <Text color={color.primary}>Signup</Text>
        </Button>
        <Button
          onPress={() => navigation.navigate(HOME_SCREEN)}
          backgroundColor={color.primary}
          flex-1
          fullWidth>
          <Text color={Colors.white}>Signin</Text>
        </Button>
      </View>
    </View>
  );
};

export default LoginScreen;
