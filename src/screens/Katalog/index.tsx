import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {View, Text, Colors} from 'react-native-ui-lib';
import BlogItem from '../../components/BlogItem';
import {useBlogService, useBrandService} from '../../hook/services';
import {Input} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize';
import {PRODUCT_LIST_SCREEN} from '../../navigation/routename';
import {ActivityIndicator, Image, ToastAndroid} from 'react-native';
import EmptyBlog from '../Blog/EmptyBlog';
import color from '../../components/Color';

const KatalogScreen = ({route, navigation}: any) => {
  const {getKatalog, getKatalogByBrand, getKatalogByKeyword} = useBlogService();
  const [keyword, setKeyword] = useState('');
  const [blogs, setBlogs] = useState([]);
  const [homeBrand, setHomeBrand] = useState([]);
  const [loading, setLoading] = useState(true);
  const {getAllBrand} = useBrandService();

  useEffect(() => {
    getBlogs();
    getBrands();
    return () => {};
  }, []);

  const getBlogs = useCallback(async () => {
    try {
      const res = await getKatalog();
      setBlogs(res.data.data);
      setLoading(false);
    } catch (error) {}
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

  const getKatalogBrand = useCallback(async (brand) => {
    console.log(brand);
    setLoading(true);
    try {
      const katalog = await getKatalogByBrand(brand);
      if (katalog) {
        setBlogs(katalog.data.data);
        setLoading(false);
      }
    } catch (error) {
      ToastAndroid.show('Error Get Katalog', ToastAndroid.SHORT);
    }
  }, []);

  const searchKatalog = useCallback(async () => {
    setLoading(true);
    try {
      const katalog = await getKatalogByKeyword(keyword);
      if (katalog) {
        setBlogs(katalog.data.data);
        setLoading(false);
      }
    } catch (error) {
      ToastAndroid.show('Error Get Katalog', ToastAndroid.SHORT);
    }
  }, [keyword]);

  return (
    <View backgroundColor={Colors.white} flexG paddingB-60>
      <ScrollView>
        <View paddingH-10>
          <Input
            placeholder="Cari Katalog"
            size="large"
            status="success"
            focusable
            accessoryLeft={() => (
              <Icon name="search" size={RFValue(20)} color={Colors.grey40} />
            )}
            onSubmitEditing={searchKatalog}
            onChangeText={(nextValue) => setKeyword(nextValue)}
            value={keyword}
          />
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            {homeBrand.map((item: any, i) => {
              return (
                <View padding-10 key={i}>
                  <TouchableOpacity
                    onPress={() => getKatalogBrand(item.brand_id)}>
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
        </View>
        {!loading ? (
          <>
            {blogs.length > 0 ? (
              blogs.map((item, i) => <BlogItem key={i} {...item} />)
            ) : (
              <EmptyBlog />
            )}
          </>
        ) : (
          <View flex-1 centerH centerV>
            <ActivityIndicator animating size="large" color={color.primary} />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default KatalogScreen;
