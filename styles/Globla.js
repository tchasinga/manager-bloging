import { StyleSheet } from "react-native";
// import * as Animatable from 'react-native-animatable';

export const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding : 20,
    },
    BlogText: {
        fontSize : 18,
        color : '#333',
        fontWeight : 'bold',
        textTransform : 'uppercase'
    },

    paragraph: {
        marginVertical: 8,
        lineHeight: 20, 
    },
    modalContent : {  
        flex: 1,
    },
    input : {
        borderWidth : 1,
        borderColor : 'black',
        padding : 10,
        borderRadius : 6,
        color : 'black',
        fontSize : 18,
        marginVertical : 5,  
    }
})