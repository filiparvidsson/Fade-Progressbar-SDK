import React from "react";

import { View, StyleSheet } from "react-native";

import { useEffect } from "react";

// a progressbar which receives total and amount finished
// and renders a progress bar

export default function ProgressBar ({ total, amount }) {

    // a state holding the current progress
    const [progress, setProgress] = React.useState(0);

    // a state which knows if the progress is finished
    const [finished, setFinished] = React.useState(false);

    // a state setting the progress when amount changes and interpolate between the current progress and the new progress over 1 second
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((progress) => {
                
                // if the progress is already at the new amount, clear the timer
                if (progress === amount) {
                    clearInterval(timer);
                    return progress;
                }

                // if the progress and amount arent equal, interpolate between the over 1 second
                return progress + (amount - progress) / 10;
            });
        }, 10);

        // if progress is close to total, set finished to true
        if (amount == total) {
            setFinished(true);
        }
        else {
            setFinished(false);
        }

        // clear the timer when the component is unmounted
        return () => clearInterval(timer);
    }, [amount]);

    
    return (
        <View style={styles.container}>
            <View style={[styles.bar, styles.emptyBar]} />
            <View style={[
                styles.bar, 
                styles.progressBar, 
                { width: `${(progress / total) * 100}%` },
                finished ? styles.finished : null
                ]} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 20,
        backgroundColor: "#fff",
        borderRadius: 10,
        overflow: "hidden",
        position: "absolute",
        top: 20,

    },
    bar: {
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        borderRadius: 10,
    },
    emptyBar: {
        backgroundColor: "#eee",
    },
    progressBar: {
        backgroundColor: "#000",
    },
    finished: {
        backgroundColor: "#0f0",
    }
});