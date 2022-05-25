import React, { Component } from "react";
import {TouchableOpacity, TextInput, Text, View, StyleSheet} from "react-native";

export default class Homescreen extends Component{
    render(){
        return(
            <View>
            <View>
                <TouchableOpacity style = {styles.button}
                onPress={() => this.props.navigation.navigate("Mood")}>
                    <Text> Mood Signifyer </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style = {styles.button}
                    onPress={() => this.props.navigation.navigate("Stress")}>
                    <Text> Stress-O-Meter </Text>
                </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity style = {styles.button}
                onPress={() => this.props.navigation.navigate("Help")}>
                    <Text> Get Help </Text>
                </TouchableOpacity>
            </View>
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