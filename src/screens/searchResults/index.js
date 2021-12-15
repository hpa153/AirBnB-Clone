import React from "react";
import { 
    View, 
    FlatList 
} from "react-native";
import { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from '../../graphql/queries';
import { useRoute } from "@react-navigation/native";

import Post from '../../components/post';

const SearchResultsScreen = (props) => {
  const {posts} = props;
  console.log("Search Results")
  for(let i = 0; i < posts.length; i++) {
    console.log(posts + " " + i)
  }

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}) => <Post post={item} />}
      />
    </View>
  );
};

export default SearchResultsScreen;