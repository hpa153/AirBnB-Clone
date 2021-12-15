import React, {useState} from 'react';
import {
    View, 
    Text, 
    TouchableOpacity
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import styles from './styles.js';

const GuestsScreen = (props) => {
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);

    const navigation = useNavigation();
    const route = useRoute();

    return (
        <View style={ styles.container }>
            <View>
            <View style={ styles.row }>
                    <View>
                        <Text style={ styles.object }>Adults</Text>
                        <Text style={{color: '#8d8d8d'}}>Ages 13 or above</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <TouchableOpacity activeOpacity={.8} 
                        onPress={() => setAdults(Math.max(0, adults - 1))}
                        style={styles.button}>
                            <Text style={ styles.btnIcon }>-</Text>
                        </TouchableOpacity>

                        <Text style={{marginHorizontal: 20, fontSize: 18}}>{adults}</Text>

                        <TouchableOpacity activeOpacity={.8} 
                        onPress={() => setAdults(adults + 1)}
                        style={styles.button}>
                            <Text style={ styles.btnIcon }>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={ styles.row }>
                    <View>
                        <Text style={ styles.object }>Children</Text>
                        <Text style={{color: '#8d8d8d'}}>Ages 2 - 12</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <TouchableOpacity activeOpacity={.8} 
                        onPress={() => setChildren(Math.max(0, children - 1))}
                        style={styles.button}>
                            <Text style={ styles.btnIcon }>-</Text>
                        </TouchableOpacity>

                        <Text style={{marginHorizontal: 20, fontSize: 18}}>{children}</Text>

                        <TouchableOpacity activeOpacity={.8} 
                        onPress={() => setChildren(children + 1)}
                        style={styles.button}>
                            <Text style={ styles.btnIcon }>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={ styles.row }>
                    <View>
                        <Text style={ styles.object }>Infants</Text>
                        <Text style={{color: '#8d8d8d'}}>Under 2</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <TouchableOpacity activeOpacity={.8} 
                        onPress={() => setInfants(Math.max(0, infants - 1))}
                        style={styles.button}>
                            <Text style={ styles.btnIcon }>-</Text>
                        </TouchableOpacity>

                        <Text style={{marginHorizontal: 20, fontSize: 18}}>{infants}</Text>

                        <TouchableOpacity activeOpacity={.8} 
                        onPress={() => setInfants(infants + 1)}
                        style={styles.button}>
                            <Text style={ styles.btnIcon }>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <TouchableOpacity 
                style= { styles.search }
                activeOpacity={.8}
                onPress={() =>
                navigation.navigate('Home', {
                    screen: 'Explore',
                    params: {
                        screen: 'Search',
                        params: {
                            guests: adults + children,
                            viewport: route.params.viewport,
                        }
                    },
                })
                }>
                <Text style={ styles.btnIcon }>
                Search
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default GuestsScreen;
