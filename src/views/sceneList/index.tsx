import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Platform,
    Button,
    AsyncStorage,
    TouchableWithoutFeedback,
    ScrollView,
    LayoutChangeEvent} from 'react-native';
import SceneBlock from './SceneBlock';
import {getStorageScenes, Scene, setStorageScenes} from '../../common/util';
import {TEST_SCENE_JSON} from '../../common/const';
import { localStorage } from '../../stores/public/LocalStorage';
import { observer } from 'mobx-react';
import sceneListStore, {SceneListStore} from '../../stores/sceneList';
import moveBlockStore from '../../stores/public/MoveBlock';
import MoveBlock from '../component/MoveBlock';

@observer
export default class SceneList extends React.Component<any, any> {
    static navigationOptions = {
        title: 'Scenes',
    }
    async getData() {
        let data = await AsyncStorage.getItem('data');
        console.log('local data is : ', data);
    }
    constructor(props: any) {
        super(props);
    }
    async saveData() {
        try {
            await AsyncStorage.setItem('data', '666');
            console.log("sex保存成功!");
        } catch(error) {
            console.error(error);
        }
    }
    private blockPress = (e: any) => {
        console.log('block press', e);
    }
    renderBlocks(): JSX.Element[] | null {
        const sceneList: Scene[] = localStorage.sceneList;
        return sceneList.map((scene) => {
            return (
                <SceneBlock key={scene.id} scene={scene} editable={sceneListStore.editable} onPress={this.blockPress}/>
            );
        });
    }
    render(): JSX.Element | null  {
        let sceneBlocks = this.renderBlocks();
        let moveBlock = moveBlockStore.display? <MoveBlock/>: null;
        return (
            <ScrollView scrollEnabled={!sceneListStore.editable} style={styles.frame}>
                <View style={styles.blockList}>
                    {sceneBlocks}
                </View>
                <Button title="task" onPress={() => this.props.navigation.navigate('Task')}/>
                <Button title="localstorage" onPress={() => this.saveData()}/>
                <Button title="get data" onPress={() => this.getData()}/>
                {moveBlock}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    frame: {
        width: '100%'
    },
    blockList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        position: 'relative',
        width: '100%'
    },
});