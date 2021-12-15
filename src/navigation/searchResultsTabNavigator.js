import React, {useState, useEffect} from "react";
import {  createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useRoute } from "@react-navigation/native";

import SearchResults from '../screens/searchResults';
import SearchResultsMap from "../screens/searchResultsMap";

import { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from '../graphql/queries';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = (props) => {
    const [posts, setPosts] = useState([]);

    const route = useRoute();
    const { guests, viewport } = route.params;

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postResult = await API.graphql(
                    graphqlOperation(listPosts, {
                        filter: {
                            and: {
                                maxGuests: {
                                    ge: guests
                                },
                                latitude: {
                                    between: [viewport.southwest.lat, viewport.northeast.lat],
                                },
                                longitude: {
                                    between: [viewport.southwest.lng, viewport.northeast.lng],
                                }
                            }

                        }
                    })
                )

                setPosts(postResult.data.listPosts.items);
                console.log("Search tab")
                console.log(posts)
            } catch (e) {
                console.log(e);
            }
        }
        fetchPosts();
    }, [])
    
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#f15454',
            indicatorStyle: {
                backgroundColor: '#f15454',
            }
            }}>
            <Tab.Screen name={"List"}>
                {() => (
                    <SearchResults posts={posts} />
                )}
            </Tab.Screen>
            <Tab.Screen name={"Map"}>
                {() => (
                    <SearchResultsMap posts={posts} />
                )}
            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default SearchResultsTabNavigator;