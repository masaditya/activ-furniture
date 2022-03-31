import React, {useCallback, useContext, useEffect, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {View, Text, Colors, Button} from 'react-native-ui-lib';
import BlogItem from '../../components/BlogItem';
import {useBlogService} from '../../hook/services';
import {blogList} from '../../mock/data';
import {Input, ViewPager} from '@ui-kitten/components';

import Icon from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize';
import {RootContext} from '../../context';
import EmptyBlog from './EmptyBlog';

const BlogScreen = ({route, navigation}: any) => {
  const {getListBlog, getBeritaByRole, getBeritaByKeyword} = useBlogService();
  const [blogs, setBlogs] = useState([]);
  const [keyword, setKeyword] = useState('');
  // @ts-ignore
  const {globalState, dispatch} = useContext(RootContext);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // Screen was focused
      getBlogs();
      console.log(globalState);
      // Do something
    });
    
    return unsubscribe;
  }, [navigation]);

  const getBlogs = useCallback(async () => {
    try {
      const res = await getBeritaByRole(globalState.user.limited);
      console.log(res.data);
      setBlogs(res.data.data);
    } catch (error) {}
  }, []);

  const searchBerita = useCallback(async () => {
    try {
      const res = await getBeritaByKeyword(keyword);
      setBlogs(res.data.data);
    } catch (error) {}
  }, [keyword]);

  return (
    <View backgroundColor={Colors.white} flexG paddingB-60>
      <ScrollView>
        <View paddingH-15>
          <Input
            placeholder="Cari Berita"
            size="large"
            status="success"
            focusable
            accessoryLeft={() => (
              <Icon name="search" size={RFValue(20)} color={Colors.grey40} />
            )}
            onSubmitEditing={searchBerita}
            onChangeText={(nextValue) => setKeyword(nextValue)}
            value={keyword}
          />
        </View>
        {blogs.length > 0 ? (
          blogs.map((item, i) => <BlogItem key={i} {...item} />)
        ) : (
          <EmptyBlog />
        )}
      </ScrollView>
    </View>
  );
};

export default BlogScreen;
