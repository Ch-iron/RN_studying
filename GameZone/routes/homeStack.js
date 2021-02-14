import { createStackNavigator } from 'react-navigation-stack';
//import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/review_detail'
import Header from '../shared/header';
import React from 'react';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Game Zone'/>
            }
        }
            // title: 'GameZone',
            // headerStyle: { backgroundColor: '#333'}
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details',
            headerStyle: { backgroundColor: '#eee'}
        }
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        borderWidth: 2,
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee'}
    }
});

export default HomeStack;