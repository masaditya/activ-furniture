import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {ImageBackground} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {Image, View, Modal, Button, Text, Colors} from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/Ionicons';
import color from '../../components/Color';
import {useBlogService} from '../../hook/services';
import {READ_BLOG_SCREEN} from '../../navigation/routename';

type ModalProps = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
};

const PopupModal = (props: ModalProps) => {
  const navigation = useNavigation();
  const {getListBlog} = useBlogService();
  const [popUpContent, setPopUpContent] = useState<any>({});

  React.useEffect(() => {
    getFirstBlog();
  }, []);

  const getFirstBlog = React.useCallback(async () => {
    try {
      const res = await getListBlog();

      console.log(res.data.data[0]);
      setPopUpContent(res.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Modal
      overlayBackgroundColor={'rgba(0,0,0,0.5)'}
      animationType="fade"
      transparent={true}
      visible={props.visible}
      onBackgroundPress={() => props.setVisible(false)}>
      <View flex centerV padding-20>
        <ImageBackground
          source={{
            uri: popUpContent.imgurl,
          }}
          imageStyle={{borderRadius: RFValue(10)}}
          style={{
            height: RFPercentage(40),
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
                {popUpContent.post_type &&
                  popUpContent.post_type.toString().toUpperCase()}
              </Text>
              <Text font12 numberOfLines={2}>
                {popUpContent.post_title}
              </Text>
              {/* <View row spread marginT-20>
                <Text font10 grey30>
                  <Icon name="person" />
                  {popUpContent.author}
                </Text>
                <Text font10 grey30>
                  <Icon name="timer" />
                  {popUpContent.publish_date}
                </Text>
              </View> */}
            </View>
          </View>
        </ImageBackground>
        <Button
          marginT-20
          onPress={() =>
            navigation.navigate('Product', {
              screen: READ_BLOG_SCREEN,
              params: {id: popUpContent.id},
            })
          }
          backgroundColor={color.primary}>
          <Text white>Read More</Text>
        </Button>
      </View>
    </Modal>
  );
};

export default PopupModal;
