import React from 'react';
import { View, Text, TextInput, Button, Image, ImageBackground, StyleSheet } from 'react-native';

import logo from '../assets/logo.jpg';
import background from '../assets/background.jpg';

const EsqueciSenha = ({ navigation }) => {
    return (
        <ImageBackground source={background} style={styles.background}>
            <View style={styles.container}>
                <Image source={logo} style={styles.logo} />
                <View style={styles.formContainer}>
                    <Text style={styles.title}>Esqueci a Senha</Text>
                    <TextInput placeholder="Usuário" style={styles.input} />
                    <TextInput placeholder="Email" style={styles.input} />
                    <Button title="Recuperar Senha" onPress={() => { /* Ação de recuperação de senha */ }} />
                    <Button 
                        title="Voltar para Login" 
                        onPress={() => navigation.navigate('Login')}
                    />
                </View>
                <Text style={styles.footerText}>Pagina feita por Marcos Vinicius</Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',       
        height: '100%',      
        resizeMode: 'cover', 
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    formContainer: {
        width: '80%',
        padding: 20,
        backgroundColor: 'rgba(192,192,192,0.5)',
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    footerText: {
        marginTop: 20,
        fontSize: 12,
        color: '#555',
    },
});

export default EsqueciSenha;
