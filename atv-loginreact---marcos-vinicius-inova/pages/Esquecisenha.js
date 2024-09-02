import { View, TextInput, Button, Image, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import background from '/assets/background.jpg';
import logo from './assets/logo.jpg';

import React from 'react';

export default function Esquecisenha() {
  return (
    <ImageBackground 
      source={background} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeTitle}>Esqueci a Senha</Text>
          <Text style={styles.welcomeSubtitle}>Recupere sua conta</Text>
        </View>

        <Image 
          source={logo} 
          style={styles.logo} 
        />
        <TextInput 
          placeholder="Digite seu e-mail" 
          style={styles.input} 
          keyboardType="email-address"
        />
        <Button title="Enviar Instruções" onPress={() => {}} />

        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.backToLogin}>Voltar ao Login</Text>
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
  backToLogin: {
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
