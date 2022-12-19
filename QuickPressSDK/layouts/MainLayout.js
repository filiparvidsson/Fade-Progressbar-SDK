import React from "react";

import { View, Text, StyleSheet } from "react-native";

// a component which takes in children and renders them

export default function MainLayout ({ children, color }) {
    return (
        <View
            style={[
                styles.container,
                { backgroundColor: color ? color : "#fff" },]}>
            {children}
        </View>
    );
}

// styles

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
    },
});
