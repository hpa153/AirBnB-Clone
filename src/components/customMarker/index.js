import React from "react";
import { View, Text } from "react-native";
import MapView, {Marker} from 'react-native-maps';


const CustomMarker = (props) => {
    const { coordinate, price, isSelected, onPress } = props;

    return (
        <MapView.Marker coordinate={coordinate} onPress={onPress} >
            <View style={{
                backgroundColor: isSelected ? "#030436" : "#e1e8e9",
                paddingHorizontal: 10,
                paddingVertical: 4,
                borderRadius: 20,
                borderColor: "#030436",
                borderWidth: 1,
            }}>
                <Text style={{ color: isSelected ? "#e1e8e9" : "#030436", fontWeight: "bold" }}>${price}</Text>
            </View>
        </MapView.Marker>
      );
};

export default CustomMarker;