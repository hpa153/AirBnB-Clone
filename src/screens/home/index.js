import React from 'react';
import {
    View, 
    ImageBackground, 
    Text, 
    TouchableOpacity
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const HomeScreen = (props) => {
    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity style={ styles.searchBtn } activeOpacity={.8} onPress={ () => navigation.navigate('Destination') }>
                <Fontisto name="search" size={ 20 } color={ "#f15454" } />
                <Text style={ styles.SearchBtnText }>Where are you going?</Text>
            </TouchableOpacity>
            <ImageBackground source={ require('../../../assets/images/rental.jpg')} style={ styles.background }>
                <Text style={ styles.title }>
                    Your{"\n"}Rentals
                </Text>
                <TouchableOpacity style={ styles.button } activeOpacity={.8} onPress={ () => navigation.navigate('Destination') }>
                    <Text style={ styles.btnText }>Discover more</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

export default HomeScreen;
