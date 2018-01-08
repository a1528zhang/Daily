import * as React from 'react';
import {View, Text, StyleSheet, Platform, Button, AsyncStorage, Dimensions, PanResponder,
    PanResponderInstance, Animated, TouchableWithoutFeedback, LayoutChangeEvent} from 'react-native';
import {Scene} from '../../common/util';
import {FIX_BLOCK_WIDTH, MOVE_BLOCK_WIDTH} from '../../common/const';
import { observer } from 'mobx-react';
import sceneListStore, {SceneListStore} from '../../stores/sceneList';
import moveBlockStore from '../../stores/public/MoveBlock';

export type SceneBlockProps = {
    scene: Scene;
    editable: boolean;
    onPress: (e:any) => void;
};

@observer
export default class SceneBlock extends React.Component<SceneBlockProps, any> {
    _panResponder: PanResponderInstance;
    _doesBlockMove: boolean = false;
    _containerInitLeft: number; // container position relative to scrollView
    _containerInitTop: number;
    _animateBlockInitLeft: number; // animateBlock position relative to container block
    _animateBlockInitTop: number; 
    _componentRef: any;

    public constructor(props: any) {
        super(props);
        this.containerMeasure = this.containerMeasure.bind(this);
        this.animateBlockMeasure = this.animateBlockMeasure.bind(this);
    }
    containerMeasure(e: LayoutChangeEvent) {
        this._containerInitLeft = e.nativeEvent.layout.x;
        this._containerInitTop = e.nativeEvent.layout.y;
    }
    animateBlockMeasure(e: LayoutChangeEvent) {
        this._animateBlockInitLeft = e.nativeEvent.layout.x;
        this._animateBlockInitTop = e.nativeEvent.layout.y;
    }
    componentWillMount(){
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: ()=> {
                console.log('move block ask');
                return true;
            },
            onPanResponderGrant: (evt, gestureState)=>{
                const {pageX, pageY, locationX, locationY} = evt.nativeEvent; 
            },
            onPanResponderMove: (evt, gestureState)=>{
                const {pageX, pageY, locationX, locationY} = evt.nativeEvent; 
                if (!this._doesBlockMove) {
                    moveBlockStore.toggleDisplay(true);
                }
                this._doesBlockMove = true;
                this._componentRef.setNativeProps({
                    style: {
                        display: 'none',
                    }
                });
                if(sceneListStore.senceListScrollViewRef) {
                    // 如果可以滚动
                    // 判断moveblock是否已经移动到顶部
                    // console.log('yes', sceneListStore.senceListScrollViewRef);
                    console.log('移动中：', this._containerInitLeft, this._animateBlockInitLeft, gestureState.dx);
                    console.log('方块坐标:', moveBlockStore);
                }
                moveBlockStore.setStyle({
                    backgroundColor: 'blue',
                    left: this._containerInitLeft + this._animateBlockInitLeft + gestureState.dx,
                    top: this._containerInitTop + this._animateBlockInitTop + gestureState.dy,
                });
            },
            onPanResponderRelease: (evt, gestureState)=>{
                if (!this._doesBlockMove) {
                    // if block is not moved, close edit mode
                    const e = sceneListStore.editable;
                    sceneListStore.toggleEditable(!e);
                }
                this._doesBlockMove = false;
                moveBlockStore.toggleDisplay(false);
                this._componentRef.setNativeProps({
                    style: {
                        display: 'flex',
                    }
                });
            }
        })
    }
    private press = (e: any) => {
        const {onPress} = this.props;
        onPress(e);
    }
    private deleteScene = (e: any) => {
        console.log('deleteScene', e);
    }
    private longPress = () => {
        const e = sceneListStore.editable;
        sceneListStore.toggleEditable(!e);
    }
    public render(): JSX.Element | null {
        const {scene, editable, onPress} = this.props;
        let panHandler = editable? {...this._panResponder.panHandlers}: null;
        if(editable) {
            return (
                <View style={styles.container} onLayout={this.containerMeasure}>
                    <Animated.View style={styles.activeBlock}
                        ref={(ref: any) => this._componentRef = ref}
                        onPress={this.press}
                        onLayout={this.animateBlockMeasure}
                        {...panHandler}>
                        <Text>{scene.title}</Text>
                        <TouchableWithoutFeedback onPress={this.deleteScene}>
                            <View style={styles.deleteBtn}>
                                <Text>x</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </Animated.View>
                </View>
            );
        } else {
            return (
                <TouchableWithoutFeedback onPress={this.press} onLongPress={this.longPress}>
                    <View style={styles.fixedBlock}>
                        <Text>{scene.title}</Text>
                    </View>
                </TouchableWithoutFeedback>
            )
        }
        
    }
}

const styles = StyleSheet.create({
    activeBlock: {
      height: MOVE_BLOCK_WIDTH,
      width: MOVE_BLOCK_WIDTH,
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
    },
    fixedBlock: {
        height: FIX_BLOCK_WIDTH,
        width: FIX_BLOCK_WIDTH,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 0,
    },
    container: {
        height: FIX_BLOCK_WIDTH,
        width: FIX_BLOCK_WIDTH,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    deleteBtn: {
        position: 'absolute',
        height: FIX_BLOCK_WIDTH/5,
        width: FIX_BLOCK_WIDTH/5,
        top: 0,
        right: 0,
        backgroundColor: 'blue',
        zIndex: 2,
    }
});