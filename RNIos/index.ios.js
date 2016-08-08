/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NativeModules,
    TouchableOpacity
} from "react-native";

var RNIOSAlert = NativeModules.RNIOSAlert;


class RNIos extends Component {
    render() {

        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>RNIOSAlert.show('from react native ')}>
                    <Text>Alert</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> {
                    var date = new Date();
                    RNIOSAlert.showTime(
                        {
                            time: date.getTime()
                        }
                    )
                }}>
                    <Text>Time</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('RNIos', () => RNIos);
