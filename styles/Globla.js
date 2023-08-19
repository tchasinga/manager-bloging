import { StyleSheet } from "react-native";
// import * as Animatable from 'react-native-animatable';

export const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding : 20,
    },
    BlogText: {
        fontFamily : 'Poppins-Black',
        fontSize : 18,
        color : '#333',
        fontWeight : 'bold',
    },

    paragraph: {
        marginVertical: 8,
        lineHeight: 20, 
    }
})