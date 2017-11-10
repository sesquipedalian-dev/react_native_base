import React, {Component} from 'react'; 
import { View, Text, Button } from 'react-native'; 
import { Actions } from 'react-native-router-flux';

export default class SecondScene extends Component {
    button() { 
        console.log("Hi");
        Actions.pop();
    } 
    render() { 
        return (
            <View>
                <Text>This is the second scene</Text>
                <Button
                    onPress={this.button.bind(this)}
                    title='go back to landing scene'
                />
            </View>
        );
    }
}