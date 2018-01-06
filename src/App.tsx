/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import DevTools from 'mobx-react-devtools';
import { StackNavigator } from 'react-navigation';

import Scene from './views/scene';
import ScenesList from './views/sceneList';

import {setStorageScenes} from './common/util'
import {TEST_SCENE_JSON} from './common/const';

// const store = new TaskListModal();

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// 存放scene列表的json字符串, 测试用
setStorageScenes(JSON.stringify(TEST_SCENE_JSON));

const RootNavigator = StackNavigator({
  Home: {
    screen: ScenesList,
  },
  Task: {
    screen: Scene,
  },
});

export default RootNavigator;
// export default class App extends React.Component<any, any> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js hhahah nice !
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//         <Task/>
//         {/* <TaskList store={TaskListModal} /> */}
//         {/* <DevTools /> */}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
