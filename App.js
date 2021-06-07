import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';

const fetchFonts = () => {
    return Font.loadAsync({
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'bold-sans': require('./assets/fonts/OpenSans-Bold.ttf')
    })
}
export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false)

  if(!fontLoaded){
    return  (
    <AppLoading
    startAsync={props.fetchFonts}
    onFinish={() => setFontLoaded(true)}
    onError={(err) => console.log(err)} />
    )
  }
  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
