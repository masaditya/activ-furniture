import {useNavigation} from '@react-navigation/native';
import {Button, Tab, TabView, ViewPager} from '@ui-kitten/components';
import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Colors, Button as UIBtn, Image} from 'react-native-ui-lib';
// import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import color from '../../components/Color';
import ProductItem from '../../components/ProductItem';
import {useProductService} from '../../hook/services';
import {productList} from '../../mock/data';
import DescriptionInfo from './DescriptionInfo';

export default function DetailsScreen(props: any) {
  const {getDetailProduct} = useProductService();
  const [productDetail, setProductDetail] = useState<any>({});
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigation = useNavigation();
  const tmp = [1, 2, 3, 4];

  useEffect(() => {
    getDetail();

    return () => {};
  }, [props.route]);

  const getDetail = useCallback(async () => {
    try {
      const res = await getDetailProduct(props.route.params.product.id);
      if (res) {
        // console.log('DETAIL DATA : ', res.data.data[0]);
        setProductDetail(res.data.data[0]);
      }
    } catch (error) {}
  }, [props.route.params]);

  return (
    <View flex-1 backgroundColor={Colors.white}>
      <ViewPager>
        {productDetail.image &&
          productDetail.image.map((item: string, i: number) => {
            return (
              <Image
                key={i}
                style={{width: RFPercentage(100), height: RFValue(200)}}
                source={{
                  uri: item,
                }}
              />
            );
          })}
      </ViewPager>

      <View backgroundColor={Colors.white} padding-15>
        <Text style={{paddingVertical: RFValue(5)}} font16bold>
          {productDetail.title}
        </Text>
        <View row spread centerV paddingT-10>
          <Text font10 color={Colors.grey40}>
            {productDetail.category}
          </Text>
        </View>
      </View>
      <TabView
        indicatorStyle={{backgroundColor: color.primary}}
        tabBarStyle={{paddingVertical: RFValue(10)}}
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}>
        <Tab title={() => <Text color={color.primary}>Description</Text>}>
          <View flex-1 backgroundColor={Colors.white} padding-20>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text>{productDetail.post_content}</Text>

              <View paddingV-20>
                <DescriptionInfo field="Brand" value={productDetail.brand} />
                <DescriptionInfo
                  field="Dimension (in)"
                  value={productDetail.dimension}
                />
                <View row flex-2 centerV>
                  <View flex-1>
                    <Text grey40>Color</Text>
                  </View>
                  <View flex-1>
                    {productDetail.color &&
                      productDetail.color.map((color: any, i: number) => {
                        return (
                          <View row key={i} centerV>
                            <Text>{color.value}</Text>
                            <Image
                              marginL-10
                              style={{width: RFValue(50), height: RFValue(50)}}
                              source={{
                                uri: color.photo,
                              }}
                            />
                          </View>
                        );
                      })}
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </Tab>
        <Tab
          style={{backgroundColor: Colors.white, flex: 1}}
          title={() => <Text color={color.primary}>Similar</Text>}>
          <FlatList
            data={productList.slice(0, 4)}
            renderItem={(item) => <ProductItem {...item.item} />}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}></FlatList>
        </Tab>
      </TabView>
    </View>
  );
}
