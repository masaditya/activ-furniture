import React from 'react';
import {ActivityIndicator} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {View} from 'react-native-ui-lib';
import {Colors} from 'react-native-ui-lib';
import color from '../../components/Color';
import SeriesItem from '../../components/SeriesItem';
import {useBrandService} from '../../hook/services';
import EmptyProduct from '../ProductList/EmptyProduct';

const SeriesScreen = ({route, navigation}: any) => {
  const {getSeries} = useBrandService();
  const [seriesList, setSeriesList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    console.log(route.params);
    getListSeries();
    return () => {};
  }, [route.params.filter]);

  const getListSeries = React.useCallback(async () => {
    setLoading(true);
    try {
      console.log(route.params.filter.brand_id);
      const response = await getSeries(route.params.filter.brand_id);
      setSeriesList(response.data.data);
      console.log(response.data.data);
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
              return <SeriesItem key={i} series={item} />;
            })
          ) : (
            <EmptyProduct message="Series Not Found" />
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

export default SeriesScreen;
