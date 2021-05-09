import React, {useCallback, useContext, useEffect, useState} from 'react';
import {View, Text, Colors, Image, Button} from 'react-native-ui-lib';
import {Input} from '@ui-kitten/components';
import {ScrollView} from 'react-native-gesture-handler';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import color from '../../components/Color';
import Icon from 'react-native-vector-icons/Ionicons';
import {LOGIN_SCREEN} from '../../navigation/routename';
import {useAuthService} from '../../hook/services';
import {RootContext} from '../../context';
import {LOGOUT_SUCCESS} from '../../context/actionTypes';

const AccountScreen = ({navigation}: any) => {
  const {getUserInfo, logoutUser} = useAuthService();
  const [isUpdateActive, setIsUpdateActive] = useState(false);
  // @ts-ignore
  const {globalState, dispatch} = useContext(RootContext);
  useEffect(() => {
    getInfo();
    return () => {};
  }, []);

  const getInfo = useCallback(async () => {
    // const info: any = await getUsername();
    // const username = info.payload.user.username;
    if (globalState.user) {
      const res = await getUserInfo(globalState.user.username);
      console.log(globalState);
    }
  }, []);
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
              disabled={!isUpdateActive}
              label="Enter Full Name"
              value={
                globalState.user &&
                globalState.user.first_name + ' ' + globalState.user.last_name
              }
            />
          </View>
          <View paddingT-20>
            <Input
              label="Email Address"
              status="basic"
              focusable
              value={globalState.user && globalState.user.email}
              disabled={!isUpdateActive}
            />
          </View>
          <View paddingT-20>
            <Input
              disabled={!isUpdateActive}
              keyboardType="number-pad"
              label="Phone Number"
              status="basic"
              value={globalState.user && globalState.user.phone}
            />
          </View>
          {/* <Button
            marginT-30
            fullWidth
            backgroundColor={color.primary}
            onPress={() => setIsUpdateActive(!isUpdateActive)}>
            <Text font14 white>
              {!isUpdateActive ? 'Update Profile' : 'Save Update'}
            </Text>
          </Button> */}
        </View>

        {/* <View
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
        </View> */}
        {/* <RadioGroup
          initialValue="home"
          >
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
        </RadioGroup> */}
      </ScrollView>
      <Button
        onPress={async () => {
          let res = await logoutUser();
          if (res) {
            dispatch({
              type: LOGOUT_SUCCESS,
            });
          }
        }}
        margin-20
        fullWidth
        backgroundColor={Colors.red10}>
        <Text font14 white>
          Logout
        </Text>
      </Button>
    </View>
  );
};

export default AccountScreen;
