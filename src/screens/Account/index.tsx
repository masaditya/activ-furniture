import React from 'react';
import {
  View,
  Text,
  Colors,
  Image,
  Button,
  RadioButton,
  RadioGroup,
} from 'react-native-ui-lib';
import {Input} from '@ui-kitten/components';
import {ScrollView} from 'react-native-gesture-handler';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import color from '../../components/Color';
import Icon from 'react-native-vector-icons/Ionicons';
import {LOGIN_SCREEN} from '../../navigation/routename';

const AccountScreen = ({navigation}: any) => {
  return (
    <View backgroundColor={Colors.white} flex-1 paddingV-20>
      <ScrollView>
        <View paddingH-20>
          <View row spread centerV>
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
            <Input
              style={{
                width: RFPercentage(30),
              }}
              label="Enter Full Name"
            />
          </View>
          <View paddingT-20>
            <Input label="Email Address" status="basic" focusable />
          </View>
          <View paddingT-20>
            <Input
              keyboardType="number-pad"
              label="Phone Number"
              status="basic"
            />
          </View>
          <Button marginT-30 fullWidth backgroundColor={color.primary}>
            <Text font14 white>
              Update Profile
            </Text>
          </Button>
        </View>

        <View
          row
          spread
          centerV
          style={{borderBottomWidth: 1, borderBottomColor: Colors.grey50}}
          padding-20>
          <Text font16bold color={color.primary}>
            My Address
          </Text>
          <Text font14bold color={color.primary}>
            <Icon name="add" size={RFValue(20)} />
            Add New
          </Text>
        </View>
        <RadioGroup
          initialValue="home"
          onValueChange={(e: any) => console.log(e)}>
          <View
            row
            spread
            centerV
            style={{borderBottomWidth: 1, borderBottomColor: Colors.grey50}}
            padding-20>
            <View width={RFPercentage(40)}>
              <Text font16bold>Main Home</Text>
              <Text font12 grey30>
                Jl. Soekarno Hatta No.9, Jatimulyo, Kec. Lowokwaru, Kota Malang,
                Jawa Timur 65141
              </Text>
              <Text font12 grey30>
                + (0341) 404424
              </Text>
            </View>
            <View paddingL-10>
              <RadioButton value="home" color={color.primary} />
            </View>
          </View>
          <View
            row
            spread
            centerV
            style={{borderBottomWidth: 1, borderBottomColor: Colors.grey50}}
            padding-20>
            <View width={RFPercentage(40)}>
              <Text font16bold>Office</Text>
              <Text font12 grey30>
                Jl. Soekarno Hatta No.9, Jatimulyo, Kec. Lowokwaru, Kota Malang,
                Jawa Timur 65141
              </Text>
              <Text font12 grey30>
                + (0341) 404424
              </Text>
            </View>
            <View paddingL-10>
              <RadioButton value="office" color={color.primary} />
            </View>
          </View>
          <View
            row
            spread
            centerV
            style={{borderBottomWidth: 1, borderBottomColor: Colors.grey50}}
            padding-20>
            <View width={RFPercentage(40)}>
              <Text font16bold>Farm House</Text>
              <Text font12 grey30>
                Jl. Soekarno Hatta No.9, Jatimulyo, Kec. Lowokwaru, Kota Malang,
                Jawa Timur 65141
              </Text>
              <Text font12 grey30>
                + (0341) 404424
              </Text>
            </View>
            <View paddingL-10>
              <RadioButton value="farm" color={color.primary} />
            </View>
          </View>
        </RadioGroup>
        <Button
          onPress={() => navigation.navigate(LOGIN_SCREEN)}
          margin-20
          fullWidth
          backgroundColor={Colors.red10}>
          <Text font14 white>
            Logout
          </Text>
        </Button>
      </ScrollView>
    </View>
  );
};

export default AccountScreen;
