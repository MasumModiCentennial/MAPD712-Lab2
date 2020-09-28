import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [value, onChangeText] = React.useState("Type something");

  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />

      <TextInput style={styles.endit}
        onChangeText = {text=>onChangeText(text)}
        placeholder = "Type something" 
        ref={input => { this.textInput = input }}
        text = {value} />
    
      <Text style={styles.text}> {value} </Text>
    
      <Button style={styles.button} title="Clear" color="red" onPress={()=>this.textInput.clear()}/>

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
    margin: 20,
  },
  //Why not working
  button:{
    backgroundColor: 'red',
    borderRadius:10,
    marginTop: 20,
  }
});
