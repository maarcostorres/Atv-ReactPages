import { View, TextInput, Button, Image, StyleSheet, Text, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import background from './assets/background.jpg';
import logo from './assets/logo.jpg';

export default function GroupManagement() {
  const [groupName, setGroupName] = useState('');
  const [members, setMembers] = useState('');
  const [groups, setGroups] = useState([]);

  const addGroup = () => {
    if (groupName && members) {
      const newGroup = { id: Math.random().toString(), groupName, members: members.split(',').map(m => m.trim()) };
      setGroups([...groups, newGroup]);
      setGroupName('');
      setMembers('');
    }
  };

  const renderGroup = ({ item }) => (
    <View style={styles.groupItem}>
      <Text style={styles.groupName}>{item.groupName}</Text>
      <Text style={styles.groupMembers}>Membros: {item.members.join(', ')}</Text>
      <TouchableOpacity onPress={() => deleteGroup(item.id)}>
        <Text style={styles.deleteButton}>Remover</Text>
      </TouchableOpacity>
    </View>
  );

  const deleteGroup = (id) => {
    setGroups(groups.filter(group => group.id !== id));
  };

  return (
    <ImageBackground 
      source={background} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeTitle}>Gerenciar Grupos</Text>
          <Text style={styles.welcomeSubtitle}>Adicione e organize os grupos da feira de ciências</Text>
        </View>

        <Image 
          source={logo} 
          style={styles.logo} 
        />

        <TextInput 
          placeholder="Nome do Grupo" 
          value={groupName}
          onChangeText={setGroupName}
          style={styles.input} 
        />
        <TextInput 
          placeholder="Membros (separados por vírgula)" 
          value={members}
          onChangeText={setMembers}
          style={styles.input} 
        />
        
        <Button title="Adicionar Grupo" onPress={addGroup} />

        <FlatList 
          data={groups}
          renderItem={renderGroup}
          keyExtractor={item => item.id}
          style={styles.groupList}
        />

        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.forgotPassword}>Feira de Ciências 2024</Text>
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
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '85%',
  },
  welcomeContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 5,
    textAlign: 'center',
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  groupList: {
    width: '100%',
    marginTop: 20,
  },
  groupItem: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  groupName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  groupMembers: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  deleteButton: {
    color: '#dc3545',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  forgotPassword: {
    color: '#FFF',
    marginTop: 20,
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
