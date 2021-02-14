import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Card from '../shared/card';

const ReviewDetails = (props) => {

    const images = {
        ratings: {
            '1': require('../assets/rating-1.png'),
            '2': require('../assets/rating-2.png'),
            '3': require('../assets/rating-3.png'),
            '4': require('../assets/rating-4.png'),
            '5': require('../assets/rating-5.png'),
        }
    }

    const rating = props.navigation.getParam('rating');

    // const pressHandler = () => {
    //     props.navigation.goBack();
    // }
    return(
        <View style={styles.container}>
            <Card>
                <Text>{props.navigation.getParam('title')}</Text>
                <Text>{props.navigation.getParam('body')}</Text>
                <View style={styles.rating}>
                    <Text>GameZone rating: </Text>
                    <Image source={images.ratings[rating]} />
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    }
})

export default ReviewDetails;