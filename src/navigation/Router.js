import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeTabNavigator from "./homeTabNavigator";
import HomeScreen from '../screens/home';
import GuestsScreen from '../screens/guests';
import DestinationSearchScreen from '../screens/destinationSearch';
import SearchResultsScreen from '../screens/searchResults';
import PostScreen from '../screens/postScreen';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="Home" component={ HomeTabNavigator } />
                <Stack.Screen name="Guests" component={ GuestsScreen } />
                <Stack.Screen name="Posts" component={ PostScreen } />
                <Stack.Screen name="Destination" component={ DestinationSearchScreen } />
                <Stack.Screen name="Search" component={ SearchResultsScreen } />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;