import * as React from 'react';
import {View, Text, StyleSheet, Platform, Button, AsyncStorage, Dimensions, PanResponder,
    PanResponderInstance, Animated, TouchableWithoutFeedback} from 'react-native';
import {Scene} from '../../common/util';
import { observer } from 'mobx-react';
import sceneListStore, {SceneListStore} from '../../stores/sceneList';
import moveBlockStore, {MoveBlockStore} from '../../stores/public/MoveBlock';

@observer
export default class MoveBlock extends React.Component<any, any> {
    public render(): JSX.Element | null  {
        return (
            <View style={moveBlockStore.style}>
                <Text>{moveBlockStore.title}</Text>
            </View>
        )
    }
}
