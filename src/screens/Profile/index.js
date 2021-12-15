import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Auth } from 'aws-amplify';

import styles from './styles';


const ProfileScreen = (props) => {

    const logout = () => {
        Auth.signOut();
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
                onPress={logout}>
                <Text style={styles.btnText}>Log Out</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ProfileScreen;
