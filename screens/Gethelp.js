import React,{Component} from "react";
import {TouchableOpacity, TextInput, Text, View, StyleSheet} from "react-native";

export default class Gethelp extends Component{
    render(){
        return(
            <View style ={{justifyContent:'center' }}>
            <Text> Get Help !</Text>
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