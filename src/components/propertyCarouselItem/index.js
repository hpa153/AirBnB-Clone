import React from 'react';
import { View, Text, Image, useWindowDimensions, TouchableOpacity } from "react-native";
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';

import PostScreen from '../../screens/postScreen';

const PropertyCarouselItem = (props) => {

  const post = props.post;
  const width = useWindowDimensions().width;

  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate('Details', { postId: post.id });
  }

  return (
    <TouchableOpacity style={[styles.container, { width: width - 60 }]} activeOpacity={0.8} onPress={ goToPostPage }>
      <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          source={{ uri: post.image }}
        />

        <View style={styles.info}>

          <Text style={styles.bedrooms}>
            {post.bed} Bed {post.bedroom} Bedroom
          </Text>

          <Text style={styles.title} numberOfLines={2}>
            {post.type}. {post.title}
          </Text>

          <Text style={styles.prices}>
            <Text style={styles.oldPrice}>${post.oldPrice} </Text>
            <Text style={styles.price}> ${post.newPrice} </Text>
            / night
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PropertyCarouselItem;
