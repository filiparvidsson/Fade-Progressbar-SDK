import React from "react";

import { View, Text, StyleSheet } from "react-native";

import MainLayout from "../layouts/MainLayout";


// a component which takes in children and an array of color values

export default function MainPage ({children}) {
    return (
        <MainLayout>
            {children}

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
});

