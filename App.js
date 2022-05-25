import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import Homescreen from './screens/Homescreen';
import Gethelp from './screens/Gethelp';
import Moodscreen from './screens/Moodscreen';
import Stress from './screens/Stress';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home" screenOptions={{
        headerShown: false
      }}> 
      <Stack.Screen name= "Home" component={Homescreen}/>
      <Stack.Screen name="Help" component={Gethelp}/>
      <Stack.Screen name="Mood" component={Moodscreen}/>
      <Stack.Screen name="Stress" component={Stress}/>
      </Stack.Navigator>
    </NavigationContainer>
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
export default App;
