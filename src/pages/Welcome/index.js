import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import * as Animatable from "react-native-animatable"

import { useNavigation } from "@react-navigation/native"

export default function Welcome() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require("../../assets/logo.png")}
                    style={{ width: "60%" }}
                    resizeMode="contain"
                />
            </View>
            <Animatable.View delay={800} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Monitore e organize os corretores e clientes!</Text>
                <Text style={styles.subtitle}>Fazer o login para começar</Text>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={ () => navigation.navigate('Login') }>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#107ece",
    },
    containerLogo: {
        backgroundColor: "#107ece",
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    containerForm: {
        flex: 1,
        backgroundColor: "#ffff",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: "5%",
        paddingEnd: "5%",
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 28,
        marginBottom: 12,
    },
    subtitle: {
        color: "#737373",
    },
    button: {
        position: "absolute",
        backgroundColor: "#107ece",
        borderRadius: 50,
        peddingVertical: 8,
        width: "50%",
        height: "20%",
        alignSelf: "center",
        bottom: "15%",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    }
})