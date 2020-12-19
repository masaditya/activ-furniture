import {
  CompositeNavigationProp,
  NavigationAction,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import {Input} from '@ui-kitten/components';
import React, {useEffect} from 'react';
import {Dimensions, FlatList, ImageBackground} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Button, Image, Colors} from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/Ionicons';
import color from '../../components/Color';
import ProductItem from '../../components/ProductItem';
import {brandList, categoryList, productList} from '../../mock/data';
import {ACCOUNT_SCREEN, PRODUCT_LIST_SCREEN} from '../../navigation/routename';

export default function HomeScreen({navigation}: any) {
  const tmp = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const tmp2 = [1, 2, 3, 4];

  useEffect(() => {
    navigation.setOptions({
      headerRight: (props: any) => (
        <Icon
          style={{paddingHorizontal: 5}}
          name="person"
          size={RFValue(25)}
          onPress={() => navigation.navigate(ACCOUNT_SCREEN)}
        />
      ),
    });
    return () => {};
  }, []);

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <View style={{backgroundColor: Colors.white}}>
            <Image
              style={{width: RFPercentage(100), height: RFValue(200)}}
              source={{
                uri:
                  'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
              }}
            />
            <View padding-20>
              <Input
                placeholder="Search Product"
                size="large"
                accessoryLeft={() => (
                  <Icon
                    name="search"
                    size={RFValue(20)}
                    color={Colors.grey40}
                  />
                )}
                // onChangeText={(nextValue) => setValue(nextValue)}
              />
              <View row paddingT-10 spread centerV>
                <Text font14>Brand</Text>
                <Text font12 color={color.primary}>
                  View All
                </Text>
              </View>
              <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                {brandList.map((item, i) => {
                  return (
                    <View padding-10 key={i}>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate(PRODUCT_LIST_SCREEN)
                        }>
                        <Image
                          style={{
                            width: RFValue(100),
                            height: RFValue(100),
                            borderRadius: RFValue(10),
                          }}
                          source={{
                            uri: item.image,
                          }}
                        />
                        <Text style={{padding: RFValue(5)}} font14bold>
                          {item.name}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </ScrollView>
              <View row paddingT-10 spread centerV>
                <Text font14>Categories</Text>
                <Text font12 color={color.primary}>
                  View All
                </Text>
              </View>
              <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                {categoryList.map((item, i) => {
                  return (
                    <View padding-10 key={i}>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate(PRODUCT_LIST_SCREEN)
                        }>
                        <Image
                          style={{
                            width: RFValue(100),
                            height: RFValue(100),
                            borderRadius: RFValue(10),
                          }}
                          source={{
                            uri: item.image,
                          }}
                        />
                        <Text style={{padding: RFValue(5)}} font14bold>
                          {item.name}
                        </Text>
                        <Text
                          style={{paddingHorizontal: RFValue(5)}}
                          font10
                          color={Colors.grey40}>
                          1984 items
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </ScrollView>

              <View row paddingT-10 spread centerV>
                <Text font14>Best Seller</Text>
                <Text font12 color={color.primary}>
                  View All
                </Text>
              </View>
            </View>
          </View>
        </>
      }
      data={productList}
      renderItem={(item) => <ProductItem {...item.item} />}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}></FlatList>
  );
}
