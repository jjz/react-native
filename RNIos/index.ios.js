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
    _alertCallback() {

        RNIOSAlert.showAlertAndCallback(function (err, datas) {
            if (err) {
                console.warn('err', '已取消');
            } else {
                console.warn('data', '请继续');
            }

        });
    }

    render() {

        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={()=>RNIOSAlert.show('from react native ')}>
                    <Text>Alert</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={()=> {
                        var date = new Date();
                        RNIOSAlert.showTime(
                            {
                                time: date.getTime()
                            }
                        )
                    }}>
                    <Text>Time</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={()=>this._alertCallback()}>
                    <Text>Alert Callback</Text>
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
    btn: {
        margin: 10
    },
});

AppRegistry.registerComponent('RNIos', () => RNIos);
