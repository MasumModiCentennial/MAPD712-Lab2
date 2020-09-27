import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [value, onChangeText] = React.useState("Type something");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TextInput style={styles.endit}
        onChangeText = {text=>onChangeText(text)}
        clearTextOnFocus = {true}
        placeholder = "Type something" 
        text = {value}
      />
      <Text style={styles.text}> {value} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:100,
  },
  endit:{
    borderColor: 'black',
     borderWidth: 1,
     padding: 10,
     width: '100%',
  },
  text:{
    marginTop: 20,
  }
});
