import React, { Component } from "react";
import {TouchableOpacity, TextInput, Text, View, StyleSheet} from "react-native";

export default class Moodscreen extends Component{
    render(){
        return(
            <View style ={{justifyContent:'center' }}>
            <Text> Mood Screen !</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        width: 150,
        height: 50,
    }
})