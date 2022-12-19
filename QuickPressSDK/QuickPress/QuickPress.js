import React from "react";
import { useEffect } from "react";

import { View, Text, StyleSheet } from "react-native";

import MainLayout from "../layouts/MainLayout";
import MainPage from "../pages/MainPage";

import ProgressBar from "../components/progressBar/ProgressBar";
import NavigationButton from "../components/navigationButton/NavigationButton";

export default function QuickPress ({ background, children }) {
    // state for which page is currently being displayed
    const [currentPage, setCurrentPage] = React.useState(0);

    // a state which which keep track of the next page
    const [nextPage, setNextPage] = React.useState(0);

    // state if there is a transition currently happening
    const [transitioning, setTransitioning] = React.useState(false);

    // a state which keeps track of how many percent of the timer has passed
    const [timerProgress, setTimerProgress] = React.useState(0);

    // a state for the color array
    const [colors, setColors] = React.useState(background);

    // when the component first is called, check that children and background exists, otherwisr throw an error
    useEffect(() => {
        if (!children) {
            throw new Error("QuickPress: children is not defined");
        }
        if (!background) {
            throw new Error("QuickPress: background is not defined");
        }

        // if background does not exist, set the color array to a white array
        if (!background) {
            setColors(Array(children.length).fill("#fff"));
        }
        else {
            setColors(background);
        }
    }, []);

    // a function which sets the color array to the color array passed in
    useEffect(() => {
        // if the number of children is more than the number of colors, fill the color array with the last color
    if (children.length > colors.length) {
        const lastColor = '#fff';
        const newColors = colors;
        for (let i = colors.length; i < children.length; i++) {
            newColors.push(lastColor);
        }
        setColors(newColors);
    }
    else {
        setColors(background);
    }
    }, [background, children]);

    
    // a function which return a mainlayout if the page is not transitioning
    // and a view with the current page and the next page if it is transitioning
    const renderPage = () => {
       if (!transitioning) {
            return (
                <MainLayout color={colors[currentPage]}>
                    {children[currentPage]}      
                </MainLayout>
            );
        }
        else {
            return (
                // return a view with the next page on top of the current page and use timerProgress to determine the opacity of the next page
                // so that it will fade in
                <View style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}}>
                <View style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}}>
                    <MainLayout color={colors[currentPage]}>
                    {children[currentPage]}
                    </MainLayout>
                </View>

                <View style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: timerProgress / 100}}>
                    <MainLayout color={colors[nextPage]}>
                    {children[nextPage]}
                    </MainLayout>
                </View>
                </View>
            );
        }
    }

    // a function which render a navigation button for each color
    const renderNavigationButtons = () => {
        return children.map((color, index) => {
            return (
                <NavigationButton
                    key={index}

                    // when the button is pressed, set the next page to the index of the button
                    onPress={() => {
                        setNextPage(index);
                        setTransitioning(true);
                        const timer = setInterval(() => {
                            setTimerProgress((timerProgress) => {
                                if (timerProgress >= 100) {
                                    clearInterval(timer);
                                    setCurrentPage(index);
                                    setTransitioning(false);
                                    setTimerProgress(0);
                                    return 0;
                                }
                                else {
                                    return timerProgress + 1;
                                }
                            });
                        }, 1/10000);
                    }}
                    // if the button is the current page, set the active prop to true
                    active={index === nextPage}>
                    </NavigationButton>   
            );
        });
    }

    // timer to switch between pages
    useEffect(() => {

        const timer = setInterval(() => {
            setTransitioning(true);
            setNextPage((currentPage + 1) % colors.length);
            const timer = setInterval(() => {
                setTimerProgress((timerProgress) => {
                    if (timerProgress >= 100) {
                        clearInterval(timer);
                        setCurrentPage((currentPage + 1) % colors.length);
                        setTransitioning(false);
                        setTimerProgress(0);
                        return 0;
                    }
                    else {
                        //console.log("timerProgress: " + timerProgress)
                        return timerProgress + 1;
                        
                    }
                });
            }, 1/10000);

            // clear the timer when the component is unmounted
            return () => clearInterval(timer);
          
        }, 5000);

        // clear the timer when the component is unmounted
        return () => clearInterval(timer);


    }, [currentPage]);

        return (
            <View style={styles.container}>   
                {renderPage()}
            <ProgressBar total={children.length} amount={nextPage + 1} /> 
                <View style={styles.buttonContainer}>
                    {renderNavigationButtons()}
                </View>
            
            </View>
            
        );
    
    

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
    },
    buttonContainer: {
        position: "absolute",
        flexDirection: "row",
        bottom: 0,
        right: 0,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        width: "100%",
    },
});
        