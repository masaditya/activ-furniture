import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {View, Text, Image} from 'react-native-ui-lib';
import {RootContext} from '../../context';
import {ACCOUNT_SCREEN} from '../../navigation/routename';

const UserAvatar = () => {
  //   @ts-ignore
  const {globalState, dispatch} = useContext(RootContext);
  const navigation = useNavigation();

  React.useEffect(() => {
    console.log(globalState.user);
    return () => {};
  }, []);
  return (
    <View row centerV paddingV-40 paddingH-20>
      <Image
        style={{
          width: 70,
          height: 70,
          borderRadius: RFValue(10),
        }}
        source={{
          uri:
            'https://www.bdbpitmans.com/wp-content/uploads/placeholder-profile.png',
        }}
      />
      <View paddingL-10>
        <Text font18bold numberOfLines={1}>
          {globalState.user && globalState.user.first_name}{' '}
          {globalState.user && globalState.user.last_name}
        </Text>
        <Text grey40 onPress={() => navigation.navigate(ACCOUNT_SCREEN)}>
          View Profile
        </Text>
      </View>
    </View>
  );
};

export default UserAvatar;
