import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

import * as Animatable from "react-native-animatable"

import { useNavigation } from "@react-navigation/native"

export default function Login() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Cadastro imobiliária</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                
                <Text style={styles.title}>CNPJ:</Text>
                <TextInput
                    placeholder="Digite o CNPJ..."
                    style={styles.input}
                />
                <Text style={styles.title}>Email:</Text>
                <TextInput
                    placeholder="Digite um e-mail..."
                    style={styles.input}
                />

                <Text style={styles.title}>Senha:</Text>
                <TextInput
                    placeholder="Digite a senha..."
                    style={styles.input}
                />

                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Acessar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonRegister}>
                        <Text 
                            style={styles.registerText}
                            onPress={ () => navigation.navigate('Login') }>
                            Já possue uma conta? 
                            <Text style={styles.registerTextLink}> Login</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#107ece",
    },
    containerHeader: {
        marginTop: "14%",
        marginBottom: "8%",
        paddingStart: "5%",
    },
    message: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff"
    },
    containerForm: {
        backgroundColor: "#fff",
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: "5%",
        paddingEnd: "5%",
        paddingTop: "5%",
    },
    title: {
        fontSize: 20,
        marginTop: 0,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: "#107ece",
        width: "50%",
        borderRadius: 5,
        paddingVertical: 8,
        marginTop: 14,
        alignItems: "center",
        justifyContent: "center",

    },
    containerButton: {
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: "center",
    },  
    registerText: {
        color: "#737373",
    },
    registerTextLink: {
        color: "#ff914d",
    },
})