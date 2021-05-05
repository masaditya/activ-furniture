import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  RefreshControl,
  ToastAndroid,
} from 'react-native';
import {ScrollView, TouchableHighlight} from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  View,
  Text,
  Colors,
  Modal,
  Slider,
  ChipsInput,
} from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/Ionicons';
import color from '../../components/Color';
import ProductItem from '../../components/ProductItem';
import {useBrandService, useProductService} from '../../hook/services';
import {productList} from '../../mock/data';
import {PRODUCT_LIST_SCREEN} from '../../navigation/routename';
import EmptyProduct from './EmptyProduct';
import RightDrawer from './RightDrawer';

const ProductListScreen = ({route, navigation}: any) => {
  const {
    getAllBrand,
    getAllCategory,
    brandProduct,
    categoryProduct,
    filterProduct,
    searchProduct,
  } = useBrandService();

  const {getAllProduct} = useProductService();
  const [modalVisible, setModalVisible] = useState(false);
  const [products, setProducts] = useState([]);

  const [optionBrands, setOptionBrands] = useState([]);
  const [optionCategory, setOptionCategory] = useState([]);

  const [selectedBrand, setSelectedBrand] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

  const [priceFilter, setPriceFilter] = useState<{min: number; max: number}>({
    min: 100,
    max: 200,
  });
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View paddingH-10>
          <Text font14bold onPress={() => setModalVisible(true)}>
            Filter
          </Text>
        </View>
      ),
    });
    getBrands();
    getCategories();
  }, []);

  useEffect(() => {
    if (route.params) {
      let type = Object.keys(route.params.filter);
      // console.log(route.params);
      if (type[0] === 'brand_id') getProductByBrand();
      if (type[0] === 'category_id') getProductByCategory();
      if (type[0] === 'keyword') getProductByKeyword();
    } else {
      getAllProducts();
    }
    return () => {
      setLoading(true);
    };
  }, [route.params]);

  // useFocusEffect(
  //   useCallback(() => {
  //     // Do something when the screen is focused

  //     return () => {
  //       // Do something when the screen is unfocused
  //       // Useful for cleanup functions
  //       delete route.params
  //     };
  //   }, [])
  // );

  const getBrands = useCallback(async () => {
    try {
      const brand = await getAllBrand();
      if (brand) {
        setOptionBrands(brand.data.data);
        setLoading(false);
      }
    } catch (error) {
      ToastAndroid.show('Error Get Brands', ToastAndroid.SHORT);
    }
  }, []);

  const getCategories = useCallback(async () => {
    try {
      const category = await getAllCategory();

      if (category) {
        setOptionCategory(category.data.data);
        setLoading(false);
      }
    } catch (error) {
      ToastAndroid.show('Error Get Categories', ToastAndroid.SHORT);
    }
  }, []);

  const getAllProducts = useCallback(async () => {
    try {
      const res = await getAllProduct();
      setProducts(res.data.data);
      setLoading(false);
    } catch (error) {
      ToastAndroid.show('Error Get Products', ToastAndroid.SHORT);
    }
  }, [route.params]);

  const getProductByBrand = useCallback(async () => {
    try {
      const res = await brandProduct({brand: [route.params.filter.brand_id]});
      setProducts(res.data.data);
      setLoading(false);
    } catch (error) {
      ToastAndroid.show('Error Get Products', ToastAndroid.SHORT);
    }
  }, [route.params]);

  const getProductByKeyword = useCallback(async () => {
    try {
      const res = await searchProduct(route.params.filter.keyword);
      setProducts(res.data.data);
      setLoading(false);
    } catch (error) {
      ToastAndroid.show('Error Get Products', ToastAndroid.SHORT);
    }
  }, [route.params]);

  const getProductByCategory = useCallback(async () => {
    try {
      const res = await categoryProduct({
        category: [route.params.filter.category_id],
      });
      setProducts(res.data.data);
      setLoading(false);
    } catch (error) {
      ToastAndroid.show('Error Get Products', ToastAndroid.SHORT);
    }
  }, [route.params]);

  const applyFilter = useCallback(async () => {
    setModalVisible(false);
    try {
      const res = await filterProduct(
        {brand: selectedBrand},
        {category: selectedCategory},
      );
      setProducts(res.data.data);
      setLoading(false);
    } catch (error) {}
  }, [selectedBrand, selectedCategory]);

  const handleSelectedBrand = useCallback(
    (value: string) => {
      if (selectedBrand.includes(value)) {
        setSelectedBrand([...selectedBrand.filter((e) => e !== value)]);
      } else {
        setSelectedBrand([...selectedBrand, value]);
      }
    },
    [selectedBrand],
  );

  const handleSelectedCategory = useCallback(
    (value: string) => {
      if (selectedCategory.includes(value)) {
        setSelectedCategory([...selectedCategory.filter((e) => e !== value)]);
      } else {
        setSelectedCategory([...selectedCategory, value]);
      }
    },
    [selectedCategory],
  );

  const resetFilter = useCallback(() => {
    ToastAndroid.show('Filter Reset', ToastAndroid.SHORT);
    setModalVisible(false);
    setSelectedBrand([]);
    setSelectedCategory([]);
    getAllProducts();
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    if (route.params) {
      let type = Object.keys(route.params.filter);
      console.log(type[0]);
      if (type[0] === 'brand_id') await getProductByBrand();
      if (type[0] === 'category_id') await getProductByCategory();
      if (type[0] === 'keyword') await getProductByKeyword();
    } else {
      await getAllProducts();
    }
    setRefreshing(false);
  }, [refreshing, route.params, selectedBrand, selectedCategory]);

  return (
    <View flex-1 backgroundColor={Colors.white}>
      <RightDrawer
        priceFilter={priceFilter}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setPriceFilter={setPriceFilter}
        brands={optionBrands}
        categories={optionCategory}
        handleSelectedCategory={handleSelectedCategory}
        handleSelectedBrand={handleSelectedBrand}
        selectedBrand={selectedBrand}
        selectedCategory={selectedCategory}
        applyFilter={applyFilter}
        resetFilter={resetFilter}
      />
      {!loading ? (
        <FlatList
          ListHeaderComponent={
            <View
              paddingT-10
              style={{borderBottomWidth: 1, borderBottomColor: Colors.grey50}}>
              {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View paddingH-20 paddingV-10>
                <Text
                  onPress={() => setModalVisible(true)}
                  color={
                    selectedCategory === 'All' ? color.primary : Colors.grey40
                  }
                  font16bold>
                  All
                </Text>
              </View>
              <View paddingH-20 paddingV-10>
                <Text
                  onPress={() => setSelectedCategory('L Shaped')}
                  color={
                    selectedCategory === 'L Shaped'
                      ? color.primary
                      : Colors.grey40
                  }
                  font16bold>
                  L Shaped
                </Text>
              </View>
              <View paddingH-20 paddingV-10>
                <Text
                  onPress={() => setSelectedCategory('Recliner')}
                  color={
                    selectedCategory === 'Recliner'
                      ? color.primary
                      : Colors.grey40
                  }
                  font16bold>
                  Recliner
                </Text>
              </View>
              <View paddingH-20 paddingV-10>
                <Text
                  onPress={() => setSelectedCategory('Sofa Cum Bed')}
                  color={
                    selectedCategory === 'Sofa Cum Bed'
                      ? color.primary
                      : Colors.grey40
                  }
                  font16bold>
                  Sofa Cum Bed
                </Text>
              </View>
            </ScrollView> */}
            </View>
          }
          data={products}
          renderItem={(item) => <ProductItem {...item.item} />}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          refreshControl={
            <RefreshControl
              colors={[color.primary, '#FFFFFF']}
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
          ListEmptyComponent={() => <EmptyProduct />}
        />
      ) : (
        <View flex-1 centerH centerV>
          <ActivityIndicator animating size="large" color={color.primary} />
        </View>
      )}
    </View>
  );
};

export default ProductListScreen;
