import React  from "react";
import { View, Text, StyleSheet, Alert , TouchableOpacity } from "react-native";

export default function FlatButton({text}){
    return(
        <TouchableOpacity>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    ) 
}

const styles = StyleSheet.create({
    button : {
       borderRadius : 8,
       paddingVertical : 14,
       paddingHorizontal : 10,
       backgroundColor : '#f01d71',
    },
    buttonText : {
        color : '#fff',
        fontSize : 18,
        fontWeight : 'bold',
        textAlign : 'center',
        textTransform : 'capitalize'
    }
})