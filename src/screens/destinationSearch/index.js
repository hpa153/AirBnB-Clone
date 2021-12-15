import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";


import styles from './styles.js';
import SuggestionRow from "./suggestionRow";

const DestinationSearchScreen = (props) => {

    const navigation = useNavigation();

    return (
        <View style={ styles.container }>
            <GooglePlacesAutocomplete
                placeholder='Where are you going?'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    // console.log(data, details);
                    navigation.navigate('Guests', { viewport: details.geometry.viewport });
                }}
                fetchDetails
                styles={{
                    textInput: styles.input,
                }}
                query={{
                    key: 'YOUR KEY',
                    language: 'en',
                    types: '(cities)',
                }}
                suppressDefaultStyles
                renderRow={(item) => <SuggestionRow item={item} />}
            />
        </View>
    )
}

export default DestinationSearchScreen;
