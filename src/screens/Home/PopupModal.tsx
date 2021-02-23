import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {ImageBackground} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {Image, View, Modal, Button, Text, Colors} from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/Ionicons';
import color from '../../components/Color';
import { RootContext } from '../../context';
import { useProductService} from '../../hook/services';
import {READ_BLOG_SCREEN} from '../../navigation/routename';

type ModalProps = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
};

const PopupModal = (props: ModalProps) => {
  const navigation = useNavigation();
  const {getPopup} = useProductService();
  const [popUpContent, setPopUpContent] = useState<any>({});
 // @ts-ignore
 const {globalState} = useContext(RootContext);

  React.useEffect(() => {
    if(!globalState.isSignout){
      getFirstBlog();
    }

    return () => {
      props.setVisible(false);
    };
  }, []);

  const getFirstBlog = React.useCallback(async () => {
    try {
      const res = await getPopup();

      if (res.data.data.length > 0) {
        setPopUpContent(res.data.data[0]);

        props.setVisible(true);
      }
    } catch (error) {
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
            uri: popUpContent.featured_image,
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
                {popUpContent.slider_description &&
                  popUpContent.slider_description}
              </Text>
              {/* <Text font12 numberOfLines={2}>
                {popUpContent.post_title}
              </Text> */}
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
            navigation.navigate('Blog', {
              screen: READ_BLOG_SCREEN,
              params: {id: popUpContent.post_id},
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
