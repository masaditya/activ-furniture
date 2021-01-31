import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {View, Text, Colors, Button} from 'react-native-ui-lib';
import BlogItem from '../../components/BlogItem';
import {useBlogService} from '../../hook/services';
import {blogList} from '../../mock/data';

const BlogScreen = ({route, navigation}: any) => {
  const {getListBlog} = useBlogService();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs();
    return () => {};
  }, []);

  const getBlogs = useCallback(async () => {
    try {
      const res = await getListBlog()
      setBlogs(res.data.data)
    } catch (error) {
    }
  }, []);

  return (
    <View backgroundColor={Colors.white} flexG paddingB-60>
      <ScrollView>
        {blogs.map((item, i) => (
          <BlogItem key={i} {...item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default BlogScreen;
