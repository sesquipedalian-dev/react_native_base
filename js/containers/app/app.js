import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

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
            </View>
        );
    }
}