import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const[weight,setWeight]= useState(0)
  const[height,setHeight] = useState(0)
  const[bmi,setBmi] = useState(0)

  const calculate = () => {
    
  
    setBmi(weight / (height * height))
    setHeight(height)
    setWeight(weight)
  }


  return (
    <View style={styles.container}>
      <Text>Weight:</Text>
      <TextInput
      placeholder='Enter your weight'
      keyboardType='decimal-pad'
      value ={weight}
     onChangeText={text => setWeight(text)}
     />
    
   
    <Text>Height:</Text>
     <TextInput
     placeholder='Enter your height'
     keyboardType='decimal-pad'
     value ={height}
    onChangeText={text => setHeight(text)}
    />

    <Text>Bmi:</Text>
    <Text>{bmi.toFixed(2)}</Text>
    <Button title='Show bmi' onPress={calculate}/>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
