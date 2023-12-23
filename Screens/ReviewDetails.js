import React, {useState} from 'react';
import { View, Text, StyleSheet , FlatList , Alert , TouchableWithoutFeedback, Keyboard} from 'react-native';
import { GlobalStyles } from '../styles/Globla';
import Card from '../Shared/Card';

export default function ReviewDetail({ navigation }) {

    const pressHandlerBack = () => {
        navigation.goBack();
    }

    const pressHandlerAbout = () => {
        navigation.navigate('About');
    }

    return(
       <View style={GlobalStyles.container}>
           <Card>
           <Text>{navigation.getParam('title')}</Text>
            <Text>{navigation.getParam('rating')}</Text>
            <Text>{navigation.getParam('body')}</Text>
            <Text onPress={pressHandlerBack}>Return to the page</Text>
            <Text onPress={pressHandlerAbout}>See About</Text>
           </Card>
       </View>
    )
}

 