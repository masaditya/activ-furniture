import {Input} from '@ui-kitten/components';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';
import {View, Text, Colors, Button, Image} from 'react-native-ui-lib';
import color from '../../../components/Color';

const RegisterScreen = () => {
  return (
    <View flex-1 backgroundColor={Colors.white} padding-20>
      <ScrollView>
        <Text font24bold>Create Account</Text>
        <View paddingV-20>
          <Image
            style={{
              width: 100,
              height: 100,
              borderRadius: RFValue(10),
            }}
            source={{
              uri:
                'https://www.bdbpitmans.com/wp-content/uploads/placeholder-profile.png',
            }}
          />
        </View>
        <View paddingV-20>
          <Input
            label="Enter Full Name"
            status="basic"
            focusable
            // onChangeText={(nextValue) => setValue(nextValue)}
          />
        </View>
        <View paddingB-20>
          <Input
            label="Email Address"
            status="basic"
            focusable
            // onChangeText={(nextValue) => setValue(nextValue)}
          />
        </View>
        <View paddingB-20>
          <Input
            label="Phone Number"
            status="basic"
            keyboardType="number-pad"
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
      </ScrollView>
      <Button backgroundColor={color.primary} fullWidth>
        <Text white font16>
          Sign Up Now
        </Text>
      </Button>
    </View>
  );
};

export default RegisterScreen;
