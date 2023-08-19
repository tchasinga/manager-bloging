import React, {useState} from 'react';
import { View, Text, StyleSheet , FlatList , Alert , TouchableWithoutFeedback, Keyboard} from 'react-native';
import { GlobalStyles } from '../styles/Globla';

export default function ReviewDetail({ navigation }) {

    const pressHandlerBack = () => {
        navigation.goBack();
    }

    return(
       <View style={GlobalStyles.container}>
           <Text>More details..</Text>
            <Text onPress={pressHandlerBack}>Return to the page</Text>
       </View>
    )
}

