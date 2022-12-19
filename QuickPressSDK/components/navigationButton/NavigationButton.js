import React from "react";

import { View, Text, StyleSheet } from "react-native";

// a function which return a small round button

export default function NavigationButton ({ children, onPress, style, active }) {

    return (
        <View style={[styles.container, style, ,
            {borderRadius: active ? 0 : 5 }
            ]}>
            <Text style={styles.text} 
            
            onPress={onPress}>{children}</Text>
        </View>
    );
}

// styles

const styles = StyleSheet.create({
    container: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#fff",
        margin: 10,
        borderColor: "#ccc",
        borderWidth: 1,
        opacity: 0.8,
    },
    text: {
        color: "#000",
        fontSize: 20,
    },
});