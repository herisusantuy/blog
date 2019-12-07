import React, { useContext } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import BlogContex from "../contex/BlogContex";

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContex);
  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={data}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;