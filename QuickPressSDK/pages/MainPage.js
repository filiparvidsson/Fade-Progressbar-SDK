import React from "react";

import { View, Text, StyleSheet } from "react-native";

import MainLayout from "../layouts/MainLayout";


// a component which takes in children and an array of color values

export default function MainPage ({children}) {
    return (
        <MainLayout>
            <View style={styles.whiteBox}>
                {children}
            </View>
        </MainLayout>
    );
}

// styles

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundcolor is rgb but opacity is 0.5
        backgroundColor: "rgba(0, 0, 0, 0)",
        alignItems: "center",
        justifyContent: "center",
    },
    // image has max width and height
    image: {
        flex:3,
        width: '20%',
    },
    whiteBox: {
        width: "50%",
        height: "50%",
        backgroundColor: "#fff",
        borderColor: "#000",
        borderWidth: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
    },
});

