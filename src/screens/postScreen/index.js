import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import DetailedPost from '../../components/detailedPost';
import { useRoute } from '@react-navigation/native';
import { API, graphqlOperation } from 'aws-amplify';

import { listPosts } from '../../graphql/queries';


const PostScreen = (props) => {
  const route = useRoute();
  console.log("PostSCreen")
  console.log(route.params);
  const [ready, setReady] = useState(false);
  const [posts, setPosts] = useState();
  const [post, setPost] = useState();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postResult = await API.graphql(
          graphqlOperation(listPosts)
        )

        setPosts(postResult.data.listPosts.items);
        const foundPost = posts.find(place => place.id === route.params.postId);
        setPost(foundPost);
        if (typeof post !== "undefined") {
          setReady(true);
          console.log("PostScreen");
          console.log(posts);
          console.log(post);
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchPosts();
  }, [])



  return (
    <View style={{ backgroundColor: 'white' }}>
      {
        ready &&
        <DetailedPost post={post} />
      }
    </View>
  );
};

export default PostScreen;
