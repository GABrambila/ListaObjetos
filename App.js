import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>LISTAS</Text>
      <Button title="Animais" onPress={() => console.log('Animais')} />
      <Button title="Carros" onPress={() => console.log('Carros')} />
      <Button title="Peixes" onPress={() => console.log('Peixes')} />
      <Button title="Times" onPress={() => console.log('Times')} />
      <Button title="Filmes" onPress={() => console.log('Filmes')} />
      <Button title="Linguagens" onPress={() => console.log('Linguagens')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;
