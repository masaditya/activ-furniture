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
            <Text onPress={handleResetFilter}>Reset</Text>
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
            <Text font16bold>Brand</Text>
            <View
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
              }}>
              {props.brands.map((item, key) => {
                return (
                  <TagLabel
                    key={key}
                    value={item.brand_name}
                    isActive={props.selectedBrand.includes(item.brand_id)}
                    onPress={() => props.handleSelectedBrand(item.brand_id)}
                  />
                );
              })}
              {/* <TagLabel
                value="Camora"
                isActive={selectedBrand.includes('Camora')}
                onPress={() => handleSelectedBrand('Camora')}
              />
              <TagLabel
                value="Lekona"
                isActive={selectedBrand.includes('Lekona')}
                onPress={() => handleSelectedBrand('Lekona')}
              />
              <TagLabel
                value="L&K"
                isActive={selectedBrand.includes('L&K')}
                onPress={() => handleSelectedBrand('L&K')}
              />
              <TagLabel
                value="Woodorld"
                isActive={selectedBrand.includes('Woodorld')}
                onPress={() => handleSelectedBrand('Woodorld')}
              /> */}
            </View>
          </View>
          <View
            padding-20
            style={{borderBottomWidth: 1, borderBottomColor: Colors.grey50}}>
            <Text font16bold>Category</Text>
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
              {/* <TagLabel
                value="Sheenam Wood"
                isActive={selectedMaterial.includes('Sheenam Wood')}
                onPress={() => handleSelectedMaterial('Sheenam Wood')}
              />
              <TagLabel
                value="Fabric"
                isActive={selectedMaterial.includes('Fabric')}
                onPress={() => handleSelectedMaterial('Fabric')}
              />
              <TagLabel
                value="Metal"
                isActive={selectedMaterial.includes('Metal')}
                onPress={() => handleSelectedMaterial('Metal')}
              />
              <TagLabel
                value="MDF"
                isActive={selectedMaterial.includes('MDF')}
                onPress={() => handleSelectedMaterial('MDF')}
              /> */}
            </View>
          </View>
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
