import React, {useState} from 'react';
import { View, Text, StyleSheet , FlatList , Alert , TouchableWithoutFeedback, Keyboard} from 'react-native';
import { GlobalStyles } from '../styles/Globla';

export default function About() {
    return(
       <View style={GlobalStyles.container}>
           <Text style={GlobalStyles.BlogText}>About passion...</Text>
       </View>
    )
}
 