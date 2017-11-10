import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class App extends Component { 
    changeInt() { 
        this.props.delayed(1);
    }

    render() { 
        return (
            <View>
                <Text>Hello, World!</Text>
                <Text>Number: {this.props.anInt}</Text>
                <Text>Number2: {this.props.aSecondInt}</Text>
                <Button
                    onPress={this.changeInt.bind(this)}
                    title='change the int!'
                />
                <Button
                    onPress={Actions.other}
                    title='go to second scene!'
                />
            </View>
        );
    }
}