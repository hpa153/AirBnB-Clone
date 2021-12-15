import React from 'react';
import {View, Text, Image, ScrollView,} from 'react-native';
import styles from './styles.js';

const DetailedPost = (props) => {
  const post = props;
  console.log("Detailed post")
  console.log(post.id)

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: post.image}}
        />

        <Text style={styles.bedrooms}>
          {post.bed} Bed {post.bedroom} Bedroom
        </Text>

        <Text style={styles.description} numberOfLines={2}>
          {post.type}. {post.title}
        </Text>

        <Text style={styles.prices}>
          <Text style={styles.oldPrice}>${post.oldPrice}</Text>
          <Text style={styles.price}>  ${post.newPrice} </Text>
          / night
        </Text>

        <Text style={styles.totalPrice}>${post.totalPrice} in total</Text>

        <Text style={styles.detailedDescription}>
          {post.description}
        </Text>
      </View>
    </ScrollView>
  );
};

export default DetailedPost;
