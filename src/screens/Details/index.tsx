import {Button, Tab, TabView} from '@ui-kitten/components';
import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {View, Text, Colors, Button as UIBtn} from 'react-native-ui-lib';
import {Image} from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/Ionicons';
import color from '../../components/Color';
import DescriptionInfo from './DescriptionInfo';

export default function DetailsScreen({navigation}: any) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <ScrollView>
      <Image
        style={{width: RFPercentage(100), height: RFValue(200)}}
        source={{
          uri:
            'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        }}
      />
      <View backgroundColor={Colors.white} padding-15>
        <Text style={{paddingVertical: RFValue(5)}} font16bold>
          Anne Solid Wood Queen Size
        </Text>
        <Text font16 color={color.primary}>
          $ 120.000
        </Text>
        <View row spread centerV paddingT-10>
          <Text font10 color={Colors.grey40}>
            Sofas // L Shaped Sofas
          </Text>
          <View row centerV>
            <Text font10bold>4.5</Text>
            <View row paddingH-5>
              <Icon name="star" color={Colors.yellow10} />
              <Icon name="star" color={Colors.yellow10} />
              <Icon name="star" color={Colors.yellow10} />
              <Icon name="star" color={Colors.yellow10} />
              <Icon name="star" color={Colors.grey50} />
            </View>
            <Text font10bold color={Colors.grey40}>
              (125)
            </Text>
          </View>
        </View>
      </View>
      <TabView
        indicatorStyle={{backgroundColor: color.primary}}
        tabBarStyle={{paddingVertical: RFValue(10)}}
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}>
        <Tab title={() => <Text color={color.primary}>Description</Text>}>
          <View backgroundColor={Colors.white} padding-20 paddingB-40>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis repellat deserunt velit quia saepe. Velit dolor, sed
              earum similique, nihil commodi alias ipsa iure necessitatibus
              aperiam distinctio aliquid, facere eaque.
            </Text>

            <View row paddingV-10>
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.grey40,
                  padding: 10,
                  marginHorizontal: 5,
                }}
              />
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.orange10,
                  padding: 10,
                  marginHorizontal: 5,
                }}
              />
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.green10,
                  padding: 10,
                  marginHorizontal: 5,
                }}
              />
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.yellow10,
                  padding: 10,
                  marginHorizontal: 5,
                }}
              />
            </View>
            <View paddingV-20>
              <DescriptionInfo field="Brand" value="Furniwood" />
              <DescriptionInfo
                field="Dimension (in)"
                value="H 22 x W 47 x D 16"
              />
              <DescriptionInfo field="Colour" value="Honey Oak" />
              <DescriptionInfo field="Room Type" value="Bedroom" />
              <DescriptionInfo field="Collection" value="Vayaka" />
              <DescriptionInfo field="Seating Height" value="13" />
              <DescriptionInfo field="Primary Material" value="Sheesham Wood" />
            </View>
          </View>
        </Tab>
        <Tab title={() => <Text color={color.primary}>Review</Text>}>
          <View>
            <Text>ORDERS</Text>
          </View>
        </Tab>
        <Tab title={() => <Text color={color.primary}>Similar</Text>}>
          <View>
            <Text>TRANSACTIONS</Text>
          </View>
        </Tab>
      </TabView>
      <View flex-2 row spread style={{position: 'absolute', bottom: 0}}>
        <UIBtn backgroundColor={color.primary} flex-1 fullWidth>
          <Text color={Colors.white}>Add To Cart</Text>
        </UIBtn>
      </View>
    </ScrollView>
  );
}
