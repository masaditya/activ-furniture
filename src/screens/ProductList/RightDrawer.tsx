import MultiSlider from '@ptomasroos/react-native-multi-slider';
import React, {useCallback, useState} from 'react';
import {Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  View,
  Text,
  Modal,
  Colors,
  Slider,
  ChipsInput,
  Button,
} from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/Ionicons';
import color from '../../components/Color';
import TagLabel from '../../components/TagLabel';

type RightDrawerProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  priceFilter: {min: number; max: number};
  setPriceFilter: (slideValue: {min: number; max: number}) => void;
  brands: any[];
  categories: any[];
  handleFilterBrand?: (brand_id: string) => void;
  handleFilterCategory?: (category_id: string) => void;
  handleSelectedCategory: (id: string) => void;
  handleSelectedBrand: (id: string) => void;
  selectedBrand: string[];
  selectedCategory: string[];
  applyFilter: () => void;
  resetFilter: () => void;
};

const RightDrawer = (props: RightDrawerProps) => {
  const handleResetFilter = useCallback(() => {
    // props.setSelectedBrand([]);
    // setSelectedMaterial([]);
  }, []);

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
        <ScrollView>
          <View
            padding-20
            row
            spread
            centerV
            style={{borderBottomWidth: 1, borderBottomColor: Colors.grey50}}>
            <Text onPress={props.resetFilter}>Reset</Text>
            <Text font20bold>Filters</Text>
            <Icon
              onPress={() => props.setModalVisible(false)}
              name="close"
              size={RFValue(20)}
            />
          </View>

          <View
            padding-20
            style={{borderBottomWidth: 1, borderBottomColor: Colors.grey50}}>
            <Text font16bold>Kategori</Text>
            <View
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
              }}>
              {props.categories.map((item, key) => {
                return (
                  <TagLabel
                    key={key}
                    value={item.category_name}
                    isActive={props.selectedCategory.includes(item.category_id)}
                    onPress={() =>
                      props.handleSelectedCategory(item.category_id)
                    }
                  />
                );
              })}
            </View>
          </View>

          {/* <View
            padding-20
            style={{borderBottomWidth: 1, borderBottomColor: Colors.grey50}}>
            <Text font16bold>Series</Text>
            <View
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
              }}>
              {props.categories.map((item, key) => {
                return (
                  <TagLabel
                    key={key}
                    value={item.category_name}
                    isActive={props.selectedCategory.includes(item.category_id)}
                    onPress={() =>
                      props.handleSelectedCategory(item.category_id)
                    }
                  />
                );
              })}
            </View>
          </View> */}
        </ScrollView>
        <Button
          onPress={() => props.applyFilter()}
          fullWidth
          backgroundColor={color.primary}>
          <Text white>Apply</Text>
        </Button>
      </View>
    </Modal>
  );
};

export default RightDrawer;
