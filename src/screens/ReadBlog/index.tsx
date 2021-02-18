import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Markdown from 'react-native-markdown-display';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {View, Text, Colors, Image} from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/Ionicons';
import color from '../../components/Color';
import {useBlogService} from '../../hook/services';

const ReadBlogScreen = ({route, navigation}: any) => {
  const {readBlog} = useBlogService();
  const [blogContent, setBlogContent] = useState<any>({});
  useEffect(() => {
    getBlogContent();
    return () => {};
  }, [route]);

  const getBlogContent = useCallback(async () => {
    try {
      const res = await readBlog(route.params.id);
      setBlogContent(res.data.data[0]);
    } catch (error) {
    }
  }, [route.params]);

  return (
    <View flexG backgroundColor={Colors.white}>
      <ScrollView>
        <Image
          style={{
            width: RFPercentage(100),
            height: RFValue(200),
            borderBottomLeftRadius: RFValue(30),
          }}
          source={{
            uri: blogContent.imgurl,
          }}
        />
        <View
          padding-30
          backgroundColor={Colors.white}
          style={{
            borderTopRightRadius: RFValue(30),
            borderBottomLeftRadius: RFValue(30),
          }}>
          <Text font18bold>{blogContent.post_title}</Text>
          <Text color={color.primary} font14bold>
            {blogContent.post_type &&
              blogContent.post_type.toString().toUpperCase()}
          </Text>
          <View row spread marginT-20>
            <Text font12 grey30>
              <Icon name="person" />
              {blogContent.author}
            </Text>
            <Text font12 grey30>
              <Icon name="timer" />
              {blogContent.publish_date}
            </Text>
          </View>
        </View>
        <View
          padding-30
          backgroundColor={Colors.white}
          style={{
            borderTopLeftRadius: RFValue(20),
            borderTopRightRadius: RFValue(30),
          }}>
          <Markdown>{contentMarkdown}</Markdown>
        </View>
      </ScrollView>
    </View>
  );
};

const contentMarkdown = `### Welcome to StackEdit!

Hi! I'm your first Markdown file in **StackEdit**. If you want to learn about StackEdit, you can read me. If you want to play with Markdown, you can edit me. Once you have finished with me, you can create new files by opening the **file explorer** on the left corner of the navigation bar.


### Files

StackEdit stores your files in your browser, which means all your files are automatically saved locally and are accessible **offline!**

### Create files and folders

The file explorer is accessible using the button in left corner of the navigation bar. You can create a new file by clicking the **New file** button in the file explorer. You can also create folders by clicking the **New folder** button.

### Switch to another file

All your files and folders are presented as a tree in the file explorer. You can switch from one to another by clicking a file in the tree.

### Rename a file

You can rename the current file by clicking the file name in the navigation bar or by clicking the **Rename** button in the file explorer.

### Delete a file

You can delete the current file by clicking the **Remove** button in the file explorer. The file will be moved into the **Trash** folder and automatically deleted after 7 days of inactivity.

`;

export default ReadBlogScreen;
