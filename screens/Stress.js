import React, { Component } from "react";
import {TouchableOpacity, TextInput, Text, View, StyleSheet} from "react-native";

export default class Stress extends Component{
    render(){
        return(
            <View style ={{justifyContent:'center' }}>
            <Text> Stress-O-Meter!</Text>
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