import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, LogBox} from 'react-native';
import {
  View,
  Text,
  Colors,
  Modal,
  Slider,
  ChipsInput,
} from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/Ionicons';
import CategoryItem from '../../components/CategoryItem';
import color from '../../components/Color';
import ProductItem from '../../components/ProductItem';
import {productList} from '../../mock/data';
// import RightDrawer from './RightDrawer';

const CategoryListScreen = ({route, navigation}: any) => {
  //   const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalVisible, setModalVisible] = useState(false);
  const [priceFilter, setPriceFilter] = useState<{min: number; max: number}>({
    min: 100,
    max: 200,
  });
  const [categoryList, setcategoryList] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View paddingH-10>
          {/* <Text font14bold onPress={() => setModalVisible(true)}>
            Filter
          </Text> */}
        </View>
      ),
    });
    setcategoryList(Object.values(route.params));
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);

  return (
    <View flex-1 backgroundColor={Colors.white}>
      {/* <RightDrawer
        priceFilter={priceFilter}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setPriceFilter={setPriceFilter}
      /> */}
      <FlatList
        ListHeaderComponent={
          <View
            paddingT-10
            style={{
              borderBottomWidth: 1,
              borderBottomColor: Colors.grey50,
            }}></View>
        }
        data={categoryList}
        renderItem={(item) => <CategoryItem {...item.item} />}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default CategoryListScreen;
