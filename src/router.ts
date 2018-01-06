
import { StackNavigator } from 'react-navigation';
import SceneDetail from './views/Scene';
import SceneList from './views/SceneList';

const RootNavigator = StackNavigator({
    Home: {
      screen: SceneList,
    },
    TaskDetail: {
      screen: SceneDetail,
    },
});

export default RootNavigator;