import React from 'react';
import { View, Text , StyleSheet, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header(){
  

    return(
        <View style={styles.header}>
           <MaterialIcons name="menu" size={28}  color="#fff" style={styles.icons}/>
           <View>
           <Text style={styles.headerText}>CRUD dashboard</Text>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header : {
        width : '100%',
        height : '100%',
       flexDirection : 'row',
       alignItems : 'center',
       justifyContent : 'center',
    },
    headerText : {
        color : '#fff',
        fontSize : 18,
        letterSpacing : 1,
        fontWeight : 'bold'
    },
    icons : {
        position : 'absolute',
        left : -39
    }
})