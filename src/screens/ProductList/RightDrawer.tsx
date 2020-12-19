import React from 'react';
import {Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  View,
  Text,
  Modal,
  Colors,
  Slider,
  ChipsInput,
} from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/Ionicons';
import color from '../../components/Color';

type RightDrawerProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  priceFilter: {min: number; max: number};
  setPriceFilter: (slideValue: {min: number; max: number}) => void;
};

const RightDrawer = (props: RightDrawerProps) => {
  return (
    <Modal
      overlayBackgroundColor={'rgba(0,0,0,0.5)'}
      onBackgroundPress={() => props.setModalVisible(false)}
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {}}>
      <View
        style={{alignSelf: 'flex-end'}}
        backgroundColor={Colors.white}
        flex-1
        width={Dimensions.get('window').width / 1.3}>
        <View
          padding-20
          row
          spread
          centerV
          style={{borderBottomWidth: 1, borderBottomColor: Colors.grey50}}>
          <Text>Reset</Text>
          <Text font20bold>Filters</Text>
          <Icon
            onPress={() => props.setModalVisible(false)}
            name="close"
            size={RFValue(20)}
          />
        </View>
        <View padding-20>
          <Slider
            value={props.priceFilter.min}
            minimumValue={100}
            maximumValue={200}
            thumbTintColor={color.primary}
            minimumTrackTintColor={color.primary}
            step={20}
            onValueChange={(e) => {
              props.setPriceFilter({...props.priceFilter, min: e});
            }}
          />
          <Text> {props.priceFilter.min} </Text>
        </View>

        <View padding-20>
          <ChipsInput disableTagRemoval disableTagAdding tags={['Ye', 'Ab']} />
          <Text> {props.priceFilter.min} </Text>
        </View>
      </View>
    </Modal>
  );
};

export default RightDrawer;
