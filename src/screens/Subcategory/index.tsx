import React from 'react';
import {ActivityIndicator} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {View} from 'react-native-ui-lib';
import {Colors} from 'react-native-ui-lib';
import color from '../../components/Color';
import SeriesItem from '../../components/SeriesItem';
import SubCategoryItem from '../../components/SubcategoryItem';
import {useBrandService} from '../../hook/services';
import EmptyProduct from '../ProductList/EmptyProduct';

const SubCategoryScreen = ({route, navigation}: any) => {
  const {getSubCategory} = useBrandService();
  const [seriesList, setSeriesList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    console.log(route.params);
    fetchsubcategory();
  }, [route.params.filter]);

  const fetchsubcategory = React.useCallback(async () => {
    setLoading(true);
    try {
      console.log(route.params.filter.category_id);
      const response = await getSubCategory(route.params.filter.category_id);
      setSeriesList(response.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [route.params]);

  return (
    <View flex backgroundColor={Colors.white}>
      {!loading ? (
        <ScrollView>
          {seriesList.length > 0 ? (
            seriesList.map((item, i) => {
              return <SubCategoryItem key={i} subcategory={item} />;
            })
          ) : (
            <EmptyProduct message="Subcategory Not Found" />
          )}
        </ScrollView>
      ) : (
        <View flex-1 centerH centerV>
          <ActivityIndicator animating size="large" color={color.primary} />
        </View>
      )}
    </View>
  );
};

export default SubCategoryScreen;
