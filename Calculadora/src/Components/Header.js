import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000',
    padding: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row', // Para alinhar a imagem e o texto lado a lado
  },
  headerImage: {
    width: 30,
    height: 30, 
    marginRight: 10, // Espaço entre a imagem e o texto
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
