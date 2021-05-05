import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {View} from 'react-native-ui-lib';
import {Colors} from 'react-native-ui-lib';
import SeriesItem from '../../components/SeriesItem';

const SeriesScreen = () => {
  return (
    <View flex backgroundColor={Colors.white}>
      <ScrollView>
        <SeriesItem />
        <SeriesItem />
        <SeriesItem />
        <SeriesItem />
        <SeriesItem />
        <SeriesItem />
        <SeriesItem />
        <SeriesItem />
      </ScrollView>
    </View>
  );
};

export default SeriesScreen;
