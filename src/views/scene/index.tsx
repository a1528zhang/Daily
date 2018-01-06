import * as React from 'react';
import {View, Text, StyleSheet, Platform, Button, Alert} from 'react-native';
import { observer } from "mobx-react";
import {observable, computed, autorun, action, reaction} from "mobx";

export default class Scene extends React.Component<any, any> {
    static navigationOptions = {
        title: 'Scene',
    }
    @observable one: number = 0;
    @computed get total(): string {
        console.log(this.one + "666");
        return this.one + "666";
    }
    two = autorun(() => {
        console.log("autorun", this.one + 6);
    });
    three = reaction(() => this.one, (data) => {
        console.log("reaction", data + 7);
    });
    componentWillMount() {
        // console.log('auto', this.two);
    }
    @action.bound
    plus(): void {
        this.one++
        console.log(this.one, this.total);
    }
    render() {
        console.log('render', this.one, this.total);
        return (
            <View>
                <Button title="plus" onPress = {this.plus}/>
                <Text>Seconds passed: { this.one } </Text> 
            </View>
        )
    }
}
