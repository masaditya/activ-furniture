import {useNavigation} from '@react-navigation/native';
import {Tab, TabView} from '@ui-kitten/components';
import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Linking,
  LogBox,
  RefreshControl,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';
import {View, Text, Colors, Button as UIBtn, Image} from 'react-native-ui-lib';
import WebView from 'react-native-webview';
import color from '../../components/Color';
import {useProductService} from '../../hook/services';
import DescriptionInfo from './DescriptionInfo';
import Carousel from 'react-native-banner-carousel';
import Pdf from 'react-native-pdf';

export default function DetailsScreen(props: any) {
  const {getDetailProduct} = useProductService();
  const [productDetail, setProductDetail] = useState<any>({});
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [videoID, setVideoID] = useState('');
  const source = {
    uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
    cache: true,
  };

  const tmp = [1, 2, 3, 4];

  useEffect(() => {
    getDetail();
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    return () => {
      setLoading(true);
    };
  }, [props.route]);

  const getDetail = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getDetailProduct(2);
      if (res) {
        setProductDetail(res.data.data[0]);
        console.log(res.data.data[0]);
        if (res.data.data[0].video) {
          let arr = productDetail.video.split('/');
          setVideoID(arr[arr.length - 1]);
        }
      }
    } catch (error) {}
    setLoading(false);
  }, [props.route.params]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getDetail();
    setRefreshing(false);
  }, [refreshing]);

  return (
    <>
      {!loading ? (
        <View flex-1 backgroundColor={Colors.white}>
          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            refreshControl={
              <RefreshControl
                colors={[color.primary, '#FFFFFF']}
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }>
            <Carousel
              pageIndicatorStyle={{backgroundColor: color.primary}}
              pageSize={Dimensions.get('window').width}>
              {productDetail.image &&
                productDetail.image.map((item: string, i: number) => {
                  return (
                    <Image
                      cover
                      aspectRatio={1.2}
                      key={i}
                      // style={{width: RFPercentage(100), height: RFValue(200)}}
                      source={{
                        uri: item,
                      }}
                    />
                  );
                })}
              {productDetail.video && (
                <WebView
                  style={{width: '100%', height: 230, marginHorizontal: 'auto'}}
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                  allowsFullscreenVideo
                  allowsInlineMediaPlayback
                  mediaPlaybackRequiresUserAction
                  source={{
                    uri: `https://www.youtube.com/embed/${videoID}`,
                  }}
                />
              )}
            </Carousel>

            <View backgroundColor={Colors.white} padding-15>
              <Text style={{paddingVertical: RFValue(5)}} font16bold>
                {productDetail.title || ''}
              </Text>
              <View row spread centerV paddingT-10>
                <Text font10 color={Colors.grey40}>
                  {productDetail.category || ''}
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
                  <Text>{productDetail.post_content || '-'}</Text>

                  <View paddingV-20>
                    <DescriptionInfo
                      field="Brand"
                      value={productDetail.brand || '-'}
                    />
                    <DescriptionInfo
                      field="Dimensi"
                      value={productDetail.dimension || '-'}
                    />
                    <DescriptionInfo
                      field="Volume"
                      value={productDetail.total_volume || '-'}
                    />
                    <DescriptionInfo
                      field="Berat Kotor"
                      value={productDetail.gross_weight || '-'}
                    />
                    <DescriptionInfo
                      field="Series"
                      value={productDetail.series_name || '-'}
                    />

                    {/* <DescriptionInfo
                        field="Product Assembly"
                        value={productDetail.product_assembly || '-'}
                      /> */}
                    {productDetail.product_assembly && (
                      <View row flex-2 centerV>
                        <View flex-1>
                          <Text grey40>Perakitan Produk</Text>
                        </View>
                        <View flex-1>
                          <UIBtn
                            fullWidth
                            backgroundColor={color.primary}
                            size={UIBtn.sizes.small}
                            onPress={() =>
                              Linking.openURL(productDetail.product_assembly)
                            }>
                            <Text white>Buka</Text>
                          </UIBtn>
                        </View>
                      </View>
                    )}
                    <View row flex-2 centerV marginV-10>
                      <View flex-1>
                        <Text grey40>Warna</Text>
                      </View>
                      <View flex-1>
                        {productDetail.color &&
                          productDetail.color.map((color: any, i: number) => {
                            return (
                              <View row key={i} centerV>
                                <Text>{color.value}</Text>
                                <Image
                                  marginL-10
                                  style={{
                                    width: RFValue(50),
                                    height: RFValue(50),
                                  }}
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
                </View>
              </Tab>
              <Tab
                style={{backgroundColor: Colors.white, flex: 1}}
                title={() => (
                  <Text color={color.primary}>Product Knowledge</Text>
                )}>
                <View>
                  <ScrollView contentContainerStyle={{flex: 1}}>
                    <Pdf
                      source={{uri: productDetail.knowledge[0].link} || source}
                      onLoadComplete={(numberOfPages, filePath) => {
                        console.log(`number of pages: ${numberOfPages}`);
                      }}
                      enableRTL={true}
                      onPageChanged={(page, numberOfPages) => {
                        console.log(`current page: ${page}`);
                      }}
                      onError={(error) => {
                        console.log(error);
                      }}
                      onPressLink={(uri) => {
                        console.log(`Link presse: ${uri}`);
                      }}
                      style={{
                        flex: 1,
                        width: Dimensions.get('screen').width,
                        height: Dimensions.get('screen').height,
                      }}
                    />
                  </ScrollView>
                </View>
              </Tab>
            </TabView>
          </ScrollView>
        </View>
      ) : (
        <View flex-1 centerH centerV>
          <ActivityIndicator animating size="large" color={color.primary} />
        </View>
      )}
    </>
  );
}
