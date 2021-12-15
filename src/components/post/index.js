import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PostScreen from '../../screens/postScreen';

import styles from './styles.js';

const Post = (props) => {
    const post = props.post;
    console.log("Post")
    console.log(post.id)
    const navigation = useNavigation();

    const goToPostPage = () => {
        navigation.navigate('Details', { postId: post.id });
    }

    return (
        <TouchableOpacity style={styles.container} activeOpacity={.8} onPress={goToPostPage}>
            <Image
                style={styles.image}
                source={{ uri: post.image }}
            />
            <Text style={styles.title}>
                {post.title}
            </Text>
            <View style={styles.info}>
                <Text style={styles.rooms}>
                    {post.bed} Bed {post.bedroom} Bedroom
                </Text>
                <Text style={styles.prices}>
                    <Text style={styles.oldPrice}>${post.oldPrice}</Text>
                    <Text style={styles.price}>  ${post.newPrice}</Text>
                    / night
                </Text>
            </View>
            <Text style={styles.description} numberOfLines={2}>
                {post.type}. {post.description}
            </Text>
        </TouchableOpacity>
    )
}

export default Post;
