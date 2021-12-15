import React, { useState, useEffect, useRef } from "react";
import { View, Text, FlatList, useWindowDimensions } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import CustomMarker from "../../components/customMarker";
import styles from './styles.js';
import PropertyCarouselItem from "../../components/propertyCarouselItem";

const SearchResultsMap = (props) => {
    const [selectedPlaceId, setSelectedPlaceId] = useState(null);

    const width = useWindowDimensions().width;
    const flatlist = useRef();
    const map = useRef();

    const viewConfig = useRef({ itemVisiblePercentThreshold: 70 });
    const onViewChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            const selectedPlace = viewableItems[0].item;
            setSelectedPlaceId(selectedPlace.id)
        }
    })

    const {posts} = props;

    useEffect(() => {
        if (!selectedPlaceId || !flatlist) {
            return;
        }

        const index = posts.findIndex(place => place.id === selectedPlaceId);
        flatlist.current.scrollToIndex({ index });

        const selectedPlace = posts[index];
        const region = {
            latitude: selectedPlace.latitude,
            longitude: selectedPlace.longitude,
            latitudeDelta: 0.16,
            longitudeDelta: 0.16,
        }
        map.current.animateToRegion(region);
    }, [selectedPlaceId])

    return (
        <View style={styles.dimension}>
            <MapView
                ref={map}
                style={styles.dimension}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 21.028511,
                    longitude: 105.804817,
                    latitudeDelta: 0.16,
                    longitudeDelta: 0.16,
                }}
            >
                {
                    posts.map(place => (
                        <CustomMarker
                            coordinate={{ latitude: place.latitude, longitude: place.longitude }}
                            price={place.newPrice}
                            isSelected={place.id === selectedPlaceId}
                            onPress={() => setSelectedPlaceId(place.id)}
                        />)
                    )}
            </MapView>

            <View style={styles.footer}>
                <FlatList
                    ref={flatlist}
                    data={posts}
                    renderItem={({ item }) => <PropertyCarouselItem post={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={width - 60}
                    snapToAlignment={"center"}
                    decelerationRate={"fast"}
                    viewabilityConfig={viewConfig.current}
                    onViewableItemsChanged={onViewChanged.current}
                />
            </View>
        </View>
    )
}

export default SearchResultsMap;
