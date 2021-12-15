import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';
import SearchResultsTabNavigator from './searchResultsTabNavigator';
import PostScreen from '../screens/postScreen';

const Stack = createNativeStackNavigator();

const Router = (props) => {
  return (
    <Stack.Navigator  screenOptions={{ headerShown: false }} >
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen  name={'Search'} component={SearchResultsTabNavigator} />
        <Stack.Screen  name={'Details'} component={PostScreen} />
    </Stack.Navigator>
  );
};

export default Router;
