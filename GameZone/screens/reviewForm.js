import React from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';

const reviewSchema = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating: yup.string().required().test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0;
    })
})

const ReviewForm = (props) => {
    return (
        <View style={styles.container}>
            <Formik
                initialValues={{title: '', body: '', rating: ''}}
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    props.addReview(values);
                }}
            >
                {(props) => (
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder='Review title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                            onBlur={props.handleBlur('title')}
                        />
                        <Text style={styles.errorText}>{props.touched.title && props.errors.title}</Text>
                        <TextInput
                            multiline minHeight={60}
                            style={styles.input}
                            placeholder='Review body'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                            onBlur={props.handleBlur('body')}
                        />
                        <Text style={styles.errorText}>{props.touched.body && props.errors.body}</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Rating(1-5)'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType='numeric'
                            onBlur={props.handleBlur('body')}
                        />
                        <Text style={styles.errorText}>{props.touched.rating && props.errors.rating}</Text>
                        <FlatButton text='submit' onPress={props.handleSubmit} />
                        {/* <Button title='submit' color='maroon' onPress={props.handleSubmit} /> */}
                    </View>
                )}

            </Formik>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
    },
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center',
    }
})
export default ReviewForm;