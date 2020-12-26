import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {View, Text, Colors, Button} from 'react-native-ui-lib';
import BlogItem from '../../components/BlogItem';
import {blogList} from '../../mock/data';
    
const BlogScreen = ({navigate}: any) => {
  return (
    <View backgroundColor={Colors.white} flexG paddingB-60>
      <ScrollView>
        {blogList.map((item, i) => (
          <BlogItem key={i} image={item.image} name={item.name} />
        ))}
      </ScrollView>
    </View>
  );
};

export default BlogScreen;
