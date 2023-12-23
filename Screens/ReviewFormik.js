import React from 'react';
import { View, Text, StyleSheet ,TouchableOpacity , TextInput, Button } from 'react-native';
import { GlobalStyles } from '../styles/Globla';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from './FlatButton';

// Validation statement... using yup
const reviewSchema = yup.object({
    title: yup.string().required().min(4).label('Title'),
    body: yup.string().required().min(4).label('Body'),
    rating: yup.number().required().min(1).max(5).label('Rating')
})

export default function ReviewForm({addReview}){
    return (
        <View style={GlobalStyles.container}>
         <Formik
         initialValues={{title: '', body : '', rating: ''}}
         validationSchema={reviewSchema}
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
                    <Text style={GlobalStyles.errorText}>{props.touched.title && props.errors.title}</Text>
                    <TextInput
                    style={GlobalStyles.input}
                    placeholder='Set Body'
                    onChangeText={props.handleChange('body')}
                    value={props.values.body}
                    />
                    <Text style={GlobalStyles.errorText}>{props.touched.body && props.errors.body}</Text>
                    <TextInput
                    style={GlobalStyles.input}
                    placeholder='Rating (1-5)'
                    onChangeText={props.handleChange('rating')}
                    value={props.values.rating}
                    keyboardType='numeric'
                    />
                    <Text style={GlobalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>
                    <Button title='submit' style={styles.btnCode} color='maroon' onPress={props.handleSubmit}/>
                </View>
            )}
         </Formik>
        </View>
    )
}

const styles = StyleSheet.create({

})