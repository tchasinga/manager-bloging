import React from 'react';
import { View, Text, StyleSheet ,TouchableOpacity , TextInput, Button } from 'react-native';
import { GlobalStyles } from '../styles/Globla';
import { Formik } from 'formik';

export default function ReviewForm({addReview}){
    return (
        <View style={GlobalStyles.container}>
         <Formik
         initialValues={{title: '', body : '', rating: ''}}
         onSubmit={(values, actions) => {
             addReview(values);
            //  alert(JSON.stringify(values, null, 2));
             actions.resetForm();
         }} 
         >
            {(props) => (
                <View>
                    <TextInput
                    style={GlobalStyles.input}
                    placeholder='Title'
                    onChangeText={props.handleChange('title')}
                    value={props.values.title}
                    />
                    <TextInput
                    style={GlobalStyles.input}
                    placeholder='Set Body'
                    onChangeText={props.handleChange('body')}
                    value={props.values.body}
                    />
                    <TextInput
                    style={GlobalStyles.input}
                    placeholder='Rating (1-5)'
                    onChangeText={props.handleChange('rating')}
                    value={props.values.rating}
                    keyboardType='numeric'
                    />
                    <Button title='submit' style={styles.btnCode} color='maroon' onPress={props.handleSubmit}/>
                </View>
            )}
         </Formik>
        </View>
    )
}

const styles = StyleSheet.create({

})