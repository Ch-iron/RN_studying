import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Card from '../shared/card';
import {MaterialIcons} from '@expo/vector-icons';
import ReviewForm from './reviewForm';

const Home = (props) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
    ])

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReview) => {
            return [review, ...currentReview];
        })
        setModalOpen(false);
    }

    // const pressHandler = () => {
    //     props.navigation.navigate('ReviewDetails')
    //     props.navigation.push('ReviewDetails');
    // }

    return(
        <View style={styles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons
                        name='close'
                        size={24}
                        style={styles.modalToggle}
                        onPress={() => setModalOpen(false)}
                        />
                        <ReviewForm addReview={addReview}/>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <MaterialIcons
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />
            <FlatList 
                data={reviews}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => props.navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={styles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    titleText: {
        //fontFamily: 'nunito-bold',
        fontSize: 18,
        color: '#333',
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 20,
    },
    modalContent: {
        flex: 1,
    }
})

export default Home;