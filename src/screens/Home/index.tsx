import {
  CompositeNavigationProp,
  NavigationAction,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import {Input, ViewPager} from '@ui-kitten/components';
import React, {useCallback, useEffect, useState} from 'react';
import {Dimensions, FlatList, ImageBackground} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Button, Image, Colors} from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/Ionicons';
import color from '../../components/Color';
import ProductItem from '../../components/ProductItem';
import {useBrandService, useProductService} from '../../hook/services';
import {brandList, categoryList, productList} from '../../mock/data';
import {
  ACCOUNT_SCREEN,
  BRAND_LIST_SCREEN,
  CATEGORY_LIST_SCREEN,
  PRODUCT_LIST_SCREEN,
} from '../../navigation/routename';

export default function HomeScreen({navigation}: any) {
  const {getAllProduct, getBanner} = useProductService();
  const {getAllBrand, getAllCategory} = useBrandService();
  const [homeProduct, setHomeProduct] = useState<any[]>([]);
  const [banner, setBanner] = useState([]);
  const [homeBrand, setHomeBrand] = useState([]);
  const [homeCategory, setHomeCategory] = useState([]);

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

    getProduct();
    getBanners();
    getBrands();
    getCategories();
    return () => {};
  }, []);

  const getProduct = useCallback(async () => {
    try {
      const res = await getAllProduct();
      if (res) {
        setHomeProduct([...res.data.data]);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getBanners = useCallback(async () => {
    try {
      const banner = await getBanner();
      if (banner) {
        setBanner(banner.data.data);
      }
    } catch (error) {}
  }, []);

  const getBrands = useCallback(async () => {
    try {
      const brand = await getAllBrand();
      if (brand) {
        // console.log(brand.data);
        setHomeBrand(brand.data.data);
      }
    } catch (error) {}
  }, []);

  const getCategories = useCallback(async () => {
    try {
      const category = await getAllCategory();
      if (category) {
        console.log(category.data);
        setHomeCategory(category.data.data);
      }
    } catch (error) {}
  }, []);

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <View style={{backgroundColor: Colors.white}}>
            <ViewPager>
              {banner.map((item, key) => {
                return (
                  <Image
                    key={key}
                    style={{width: RFPercentage(100), height: RFValue(200)}}
                    source={{
                      uri: item.featured_image,
                    }}
                  />
                );
              })}
            </ViewPager>
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
                <Text
                  onPress={() =>
                    navigation.navigate(BRAND_LIST_SCREEN, homeBrand)
                  }
                  font12
                  color={color.primary}>
                  View All
                </Text>
              </View>
              <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                {homeBrand.map((item, i) => {
                  return (
                    <View padding-10 key={i}>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate(PRODUCT_LIST_SCREEN, {
                            brand_id: item.brand_id,
                          })
                        }>
                        <Image
                          style={{
                            width: RFValue(100),
                            height: RFValue(100),
                            borderRadius: RFValue(10),
                          }}
                          source={{
                            uri: item.brand_photo,
                          }}
                        />
                        <Text style={{padding: RFValue(5)}} font14bold>
                          {item.brand_name}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </ScrollView>
              <View row paddingT-10 spread centerV>
                <Text font14>Categories</Text>
                <Text
                  onPress={() =>
                    navigation.navigate(CATEGORY_LIST_SCREEN, homeCategory)
                  }
                  font12
                  color={color.primary}>
                  View All
                </Text>
              </View>
              <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                {homeCategory.map((item, i) => {
                  return (
                    <View padding-10 key={i}>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate(PRODUCT_LIST_SCREEN, {
                            category_id: item.category_id,
                          })
                        }>
                        <Image
                          style={{
                            width: RFValue(100),
                            height: RFValue(100),
                            borderRadius: RFValue(10),
                          }}
                          source={{
                            uri: item.category_photo,
                          }}
                        />
                        <Text style={{padding: RFValue(5)}} font14bold>
                          {item.category_name}
                        </Text>
                        {/* <Text
                          style={{paddingHorizontal: RFValue(5)}}
                          font10
                          color={Colors.grey40}
                          numberOfLines={2}>
                          {item.category_info}
                        </Text> */}
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </ScrollView>

              <View row paddingT-10 spread centerV>
                <Text font14>Best Seller</Text>
                <Text
                  onPress={() => navigation.navigate(PRODUCT_LIST_SCREEN)}
                  font12
                  color={color.primary}>
                  View All
                </Text>
              </View>
            </View>
          </View>
        </>
      }
      data={homeProduct}
      renderItem={(item) => {
        return <ProductItem {...item.item} />;
      }}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}></FlatList>
  );
}
