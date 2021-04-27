import React, {useState} from 'react';
import {View, Text, Colors} from 'react-native-ui-lib';
import {useAbout} from '../../hook/services';
import WebView from 'react-native-webview';
import {Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const AboutScreen = () => {
  const {getAbout} = useAbout();
  const [content, setContent] = useState<any>({});

  React.useEffect(() => {
    getContent();
    return () => {};
  }, []);

  const getContent = React.useCallback(async () => {
    try {
      const res = await getAbout();
      console.log(res.data.data[0]);
      setContent(res.data.data[0]);
    } catch (error) {}
  }, []);

  return (
    <ScrollView>
      <View backgroundColor={Colors.white} flex-1>
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
          source={{html: content.konten || ''}}
        />
      </View>
    </ScrollView>
  );
};

export default AboutScreen;
