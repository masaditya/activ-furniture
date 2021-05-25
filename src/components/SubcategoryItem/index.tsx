import React from 'react';
import {View, Text, Image} from 'react-native-ui-lib';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';
import color from '../Color';
import {useNavigation} from '@react-navigation/native';
import {PRODUCT_LIST_SCREEN} from '../../navigation/routename';

const SubCategoryItem = ({subcategory}: any) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(PRODUCT_LIST_SCREEN, {
          filter: {category_id: subcategory.category_id},
        });
      }}>
      <View row padding-10 centerV>
        <Image
          style={{
            width: RFValue(120),
            height: RFValue(80),
            borderRadius: RFValue(10),
          }}
          source={{
            uri: subcategory.category_photo,
          }}
        />
        <View flex-1 paddingH-20 paddingV-10 row spread>
          <View>
            <Text style={{padding: RFValue(5)}} font18bold green10>
              {subcategory.category_name}
            </Text>
            <Text style={{padding: RFValue(5)}} font12bold>
              {subcategory.category_info}
            </Text>
          </View>
          <Icon name="arrow-forward" size={25} color={color.primary} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SubCategoryItem;
