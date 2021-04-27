import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Markdown from 'react-native-markdown-display';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {View, Text, Colors, Image} from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/Ionicons';
import color from '../../components/Color';
import {useBlogService} from '../../hook/services';
import HTML from 'react-native-render-html';
import {Dimensions, useWindowDimensions} from 'react-native';
import WebView from 'react-native-webview';

const ReadBlogScreen = ({route, navigation}: any) => {
  const {readBlog} = useBlogService();
  const [blogContent, setBlogContent] = useState<any>({});
  const contentWidth = useWindowDimensions().width;
  useEffect(() => {
    getBlogContent();
    return () => {};
  }, [route]);

  const getBlogContent = useCallback(async () => {
    try {
      const res = await readBlog(route.params.id);
      setBlogContent(res.data.data[0]);
    } catch (error) {}
  }, [route.params]);

  return (
    <View flexG backgroundColor={Colors.white}>
      <ScrollView>
        <Image
          style={{
            width: RFPercentage(100),
            height: RFValue(200),
            borderBottomLeftRadius: RFValue(30),
          }}
          source={{
            uri: blogContent.imgurl,
          }}
        />
        <View
          padding-30
          backgroundColor={Colors.white}
          style={{
            borderTopRightRadius: RFValue(30),
            borderBottomLeftRadius: RFValue(30),
          }}>
          <Text font18bold>{blogContent.post_title}</Text>
          <Text color={color.primary} font14bold>
            {blogContent.post_type &&
              blogContent.post_type.toString().toUpperCase()}
          </Text>
          <View row spread marginT-20>
            <Text font12 grey30>
              <Icon name="person" />
              {blogContent.author}
            </Text>
            <Text font12 grey30>
              <Icon name="timer" />
              {blogContent.publish_date}
            </Text>
          </View>
        </View>
        <View
          flex-1
          padding-30
          backgroundColor={Colors.white}
          style={{
            borderTopLeftRadius: RFValue(20),
            borderTopRightRadius: RFValue(30),
          }}>
          <WebView
            injectedJavaScript={`const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `}
            scalesPageToFit={false}
            originWhitelist={['*']}
            style={{
              width: Dimensions.get('screen').width,
              height: Dimensions.get('screen').height,
            }}
            automaticallyAdjustContentInsets={false}
            scrollEnabled={true}
            domStorageEnabled={true}
            javaScriptEnabled={true}
            source={{html: blogContent.konten || contentHTML}}
          />
          {/* <HTML source={blogContent.konten || contentHTML} /> */}
        </View>
      </ScrollView>
    </View>
  );
};

const contentHTML = `
<h1>This HTML snippet is now rendered with native components !</h1>
<h2>Enjoy a webview-free and blazing fast application</h2>
<img src="https://i.imgur.com/dHLmxfO.jpg?2" />
<em style="textAlign: center;">Look at how happy this native cat is</em>
`;

export default ReadBlogScreen;
