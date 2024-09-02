import { View, TextInput, Button, Image, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import AssetExample from './components/AssetExample';
import background from '/assets/background.jpg';
import logo from './assets/logo.jpg';

import React from 'react';

export default function App() {
  return (
    <ImageBackground 
      source={background} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeTitle}>Bem-vindo ao GenInova!</Text>
          <Text style={styles.welcomeSubtitle}>Gerenciador de Grupos do InovaWeek</Text>
        </View>

        <Image 
          source={logo} 
          style={styles.logo} 
        />
        <TextInput 
          placeholder="Nome de Usuário" 
          style={styles.input} 
        />
        <TextInput 
          placeholder="Senha" 
          secureTextEntry 
          style={styles.input} 
        />
        <Button title="Login" onPress={() => {}} />

        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.forgotPassword}>Esqueci a Senha</Text>
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
  },
  welcomeSubtitle: {
    fontSize: 18,
    color: '#FFF',
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