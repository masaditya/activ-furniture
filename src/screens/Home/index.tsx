import {Input} from '@ui-kitten/components';
import React, {useCallback, useEffect, useState} from 'react';
import {Dimensions, RefreshControl, ToastAndroid} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';
import {View, Text, Image, Colors} from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/Ionicons';
import color from '../../components/Color';
import {useBrandService, useProductService} from '../../hook/services';
import {
  ACCOUNT_SCREEN,
  BRAND_LIST_SCREEN,
  CATEGORY_LIST_SCREEN,
  PRODUCT_LIST_SCREEN,
  SERIES_SCREEN,
} from '../../navigation/routename';
import PopupModal from './PopupModal';
import Carousel from 'react-native-banner-carousel';

export default function HomeScreen({navigation, route}: any) {
  const {getBanner} = useProductService();
  const {getAllBrand, getAllCategory} = useBrandService();
  const [banner, setBanner] = useState([]);
  const [homeBrand, setHomeBrand] = useState([]);
  const [homeCategory, setHomeCategory] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [popUpVisibility, setPopUpVisibility] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState(false);

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

    getBanners();
    getBrands();
    getCategories();

    return () => {
      setPopUpVisibility(false);
    };
  }, []);

  const getBanners = useCallback(async () => {
    try {
      const banner = await getBanner();
      if (banner) {
        setBanner(banner.data.data);
      }
    } catch (error) {
      ToastAndroid.show('Error Get Banner', ToastAndroid.SHORT);
    }
  }, []);

  const getBrands = useCallback(async () => {
    try {
      const brand = await getAllBrand();
      if (brand) {
        setHomeBrand(brand.data.data);
      }
    } catch (error) {
      ToastAndroid.show('Error Get Brands', ToastAndroid.SHORT);
    }
  }, []);

  const getCategories = useCallback(async () => {
    try {
      const category = await getAllCategory();
      if (category) {
        setHomeCategory(category.data.data);
      }
    } catch (error) {
      ToastAndroid.show('Error Get Categories', ToastAndroid.SHORT);
    }
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await getBanners();
    await getBrands();
    await getCategories();
    setRefreshing(false);
  }, [refreshing]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          colors={[color.primary, '#FFFFFF']}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }>
      <View style={{backgroundColor: Colors.white}}>
        <PopupModal visible={popUpVisibility} setVisible={setPopUpVisibility} />
        <Carousel
          loop
          autoplay
          autoplayTimeout={2000}
          pageIndicatorStyle={{backgroundColor: color.primary}}
          index={0}
          pageSize={Dimensions.get('window').width}>
          {banner.map((item: any, key) => {
            return (
              <Image
                key={key}
                style={{
                  width: Dimensions.get('window').width,
                  height: RFValue(230),
                }}
                source={{
                  uri: item.featured_image || '',
                }}
              />
            );
          })}
        </Carousel>
        <View padding-20>
          <Input
            placeholder="Cari Produk"
            size="large"
            status="success"
            focusable
            accessoryLeft={() => (
              <Icon name="search" size={RFValue(20)} color={Colors.grey40} />
            )}
            onSubmitEditing={() =>
              navigation.navigate(PRODUCT_LIST_SCREEN, {
                filter: {keyword: keyword},
              })
            }
            onChangeText={(nextValue) => setKeyword(nextValue)}
            value={keyword}
          />
          <View row paddingT-10 spread centerV>
            <Text font14>Brand</Text>
            <Text
              onPress={() => navigation.navigate(BRAND_LIST_SCREEN, homeBrand)}
              font12
              color={color.primary}>
              Lihat Semua
            </Text>
          </View>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            {homeBrand.map((item: any, i) => {
              return (
                <View padding-10 key={i}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate(SERIES_SCREEN, {
                        filter: {
                          brand_id: item.brand_id,
                        },
                      })
                    }>
                    <Image
                      style={{
                        width: RFValue(100),
                        height: RFValue(100),
                        borderRadius: RFValue(10),
                      }}
                      source={{
                        uri: item.brand_photo || '',
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
            <Text font14>Kategori</Text>
            <Text
              onPress={() =>
                navigation.navigate(CATEGORY_LIST_SCREEN, homeCategory)
              }
              font12
              color={color.primary}>
              Lihat Semua
            </Text>
          </View>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            {homeCategory.map((item: any, i) => {
              return (
                <View padding-10 key={i}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate(PRODUCT_LIST_SCREEN, {
                        filter: {
                          category_id: item.category_id,
                        },
                      })
                    }>
                    <Image
                      style={{
                        width: RFValue(100),
                        height: RFValue(100),
                        borderRadius: RFValue(10),
                      }}
                      source={{
                        uri: item.category_photo || '',
                      }}
                    />
                    <Text style={{padding: RFValue(5)}} font14bold>
                      {item.category_name}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}
