import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {Dimensions, FlatList} from 'react-native';
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
import RightDrawer from './RightDrawer';

const ProductListScreen = ({route, navigation}: any) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalVisible, setModalVisible] = useState(false);
  const {brandProduct, categoryProduct} = useBrandService();
  const [products, setProducts] = useState([]);

  const [priceFilter, setPriceFilter] = useState<{min: number; max: number}>({
    min: 100,
    max: 200,
  });

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
  }, []);

  useEffect(() => {
    let type = Object.keys(route.params);
    if (type[0] === 'brand_id') getProductByBrand();
    else getProductByCategory();
    return () => {};
  }, [route.params]);

  const getProductByBrand = useCallback(async () => {
    try {
      const res = await brandProduct({brand: [route.params.brand_id]});
      setProducts(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }, [route.params]);

  const getProductByCategory = useCallback(async () => {
    const res = await categoryProduct({category: [route.params.category_id]});
    setProducts(res.data.data);
  }, [route.params]);

  return (
    <View flex-1 backgroundColor={Colors.white}>
      <RightDrawer
        priceFilter={priceFilter}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setPriceFilter={setPriceFilter}
      />
      <FlatList
        ListHeaderComponent={
          <View
            paddingT-10
            style={{borderBottomWidth: 1, borderBottomColor: Colors.grey50}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
            </ScrollView>
          </View>
        }
        data={products}
        renderItem={(item) => <ProductItem {...item.item} />}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default ProductListScreen;
