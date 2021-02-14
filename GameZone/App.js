import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
// import About from './screens/about';
// import ReviewDetails from './screens/review_detail';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigator from './routes/drawer';

// const getFonts = () => {
//   return (
//     Font.loadAsync({
//       'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
//       'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
//     })
//   )
// }


const App = () => {
  // const [fontsLoaded, setFontsLoaded] = useState(false);
    return (
      <Navigator />
    )
}

export default App;