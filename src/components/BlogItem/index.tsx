import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ImageBackground} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {View, Text, Button, Colors} from 'react-native-ui-lib';
import {READ_BLOG_SCREEN} from '../../navigation/routename';
import Icon from 'react-native-vector-icons/Ionicons';
import color from '../Color';

const BlogItem = (props: any) => {
  const navigation = useNavigation();
  return (
    <View padding-10>
      <ImageBackground
        source={{
          uri: props.imgurl,
        }}
        imageStyle={{borderRadius: RFValue(10)}}
        style={{
          height: 220,
          justifyContent: 'flex-end',
        }}>
        <View margin-10 row spread flex-5 bottom>
          <View
            padding-10
            marginR-5
            backgroundColor={Colors.white}
            flex-3
            style={{borderRadius: RFValue(5)}}>
            <Text color={color.primary} font14bold>
              {props.post_type.toString().toUpperCase()}
            </Text>
            <Text font12 numberOfLines={2}>
              {props.post_title}
            </Text>
            <View row spread marginT-20>
              <Text font10 grey30>
                <Icon name="person" />
                {props.author}
              </Text>
              <Text font10 grey30>
                <Icon name="timer" />{props.publish_date}
              </Text>
            </View>
          </View>
          <View flex-2 bottom margin-5>
            <Button
              onPress={() =>
                navigation.navigate('Product', {screen: READ_BLOG_SCREEN, params : {id : props.id}})
              }
              backgroundColor={color.primary}>
              <Text white>Read More</Text>
            </Button>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default BlogItem;
