import React from "react";

import { View, Text, StyleSheet, Button } from "react-native";

import MainLayout from "../layouts/MainLayout";

// an array of 1,x,2,y,3,z,4,&,5,$,6,%,7,^,8,*,9,!,0,# in that specific order
const quiz = ["1", "x", "2", "y", "3", "z", "4", "&", "5", "$", "6", "%", "7", "^", "8", "*", "9", "!", "0", "#"];

// a component which uses the mainlayout, takes in children, render the children beside a sign from the quiz array
export default function QuizPage ({children}) {
    if(children.length < 2){
        return (
            <MainLayout>
                <Text> Error: QuizPage requires 2 children </Text>
            </MainLayout>
        );
    }
    // render the children beside a sign from the quiz array in a set order
    return (
        <MainLayout>
            <View style={styles.container}>
                {children.map((child, index) => (
                    <View key={index} style={styles.child}>
                        <Text style={styles.text}>{quiz[index]}</Text>
                        {child}
                    </View>
                ))}
            </View>
        </MainLayout>
    );
};

// styles for the component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    child: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        textTransform: "uppercase",
    },
});
