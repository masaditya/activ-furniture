import React from 'react';
import {View, Text, Image} from 'react-native-ui-lib';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';
import color from '../Color';
import {useNavigation} from '@react-navigation/native';
import {PRODUCT_LIST_SCREEN} from '../../navigation/routename';

const SeriesItem = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(PRODUCT_LIST_SCREEN);
      }}>
      <View row padding-10 centerV>
        <Image
          style={{
            width: RFValue(120),
            height: RFValue(80),
            borderRadius: RFValue(10),
          }}
          source={{
            uri:
              'https://image.freepik.com/free-photo/empty-living-room-with-blue-sofa-plants-table-empty-green-wall_41470-1377.jpg',
          }}
        />
        <View flex-1 padding-10 row spread>
          <View>
            <Text style={{padding: RFValue(5)}} font18bold green10>
              Sofas
            </Text>
            <Text style={{padding: RFValue(5)}} font12bold>
              L Shapes
            </Text>
          </View>
          <Icon name="arrow-forward" size={25} color={color.primary} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SeriesItem;
