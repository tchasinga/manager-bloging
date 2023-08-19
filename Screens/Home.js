import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { GlobalStyles } from '../styles/Globla';
export default function Home({ navigation }) {

    // Rooting and adding Router action Page... Using onPress BTN
  const pressHandler = () => {
    navigation.navigate('ReviewDetail'); // Corrected navigation key
  }

  const pressHandlerAbout = () => {
    navigation.navigate('About');
  }

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.BlogText}>Blogging room</Text>
      <View>
        <Text onPress={pressHandler}>Now Move forward</Text>
        <Text onPress={pressHandlerAbout}>Move to About</Text>
      </View>
    </View>
  )
}
