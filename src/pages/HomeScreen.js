import React, { useEffect } from "react";
import { Button, ScrollView, StyleSheet, TouchableOpacity, View, Text, BackHandler } from "react-native";

const HomeScreen = (props) => {
    useEffect(() => {
    }, [])

    return (
        <ScrollView>
            <Text style={styles.title}>Memory</Text>
            <Text style={styles.subtitle}>Game</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => props.navigation.replace('Game')}>
                    <Text style={styles.text}>Play Game</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => BackHandler.exitApp()}>
                    <Text style={styles.text}>Exit</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({

    title: {
        marginTop: 30,
        fontSize: 40,
        textAlign: "center",
        justifyContent: "center",
    },
    subtitle: {
        fontSize: 32,
        textAlign: "center",
        justifyContent: "center",
        marginBottom: 20
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: "center",
        marginVertical: 20,
    },
    button: {
        padding:15,
        borderRadius:15,
        backgroundColor: "#66DD11",
        width: "50%",
        alignItems: "center"
    },
    text:{
        fontSize:25
    }
})
export default HomeScreen;