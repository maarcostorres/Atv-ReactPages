import { View, TextInput, Button, Image, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import background from '/assets/background.jpg';
import logo from './assets/logo.jpg';

export default function Cadastro() {
  return (
    <ImageBackground 
      source={background} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeTitle}>Criar Conta no GenInova!</Text>
          <Text style={styles.welcomeSubtitle}>Preencha os dados abaixo para criar sua conta</Text>
        </View>

        <Image 
          source={logo} 
          style={styles.logo} 
        />

        <TextInput 
          placeholder="Nome Completo" 
          style={styles.input} 
        />
        <TextInput 
          placeholder="Nome de Usuário" 
          style={styles.input} 
        />
        <TextInput 
          placeholder="E-mail" 
          style={styles.input} 
          keyboardType="email-address"
        />
        <TextInput 
          placeholder="Criar Senha" 
          secureTextEntry 
          style={styles.input} 
        />
        <TextInput 
          placeholder="Repetir Senha" 
          secureTextEntry 
          style={styles.input} 
        />
        
        <Button title="Cadastrar" onPress={() => {}} />

        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.forgotPassword}>Ja tem uma conta? Faça login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Feito por Marcos Vinicius</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '75%',
  },
  welcomeContainer: {
    marginBottom: 10,
    alignItems: 'center',
  },
  welcomeTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 5,
    textAlign: 'center',
  },
  welcomeSubtitle: {
    fontSize: 18,
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  forgotPassword: {
    color: '#FFF',
    marginTop: 10,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  footerText: {
    color: '#FFF',
    fontSize: 16,
  },
});
