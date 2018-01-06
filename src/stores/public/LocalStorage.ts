import { observable, computed, action } from "mobx";
import {Scene, Task} from "../../common/util";
import {Dimensions, AsyncStorage} from 'react-native';

class LocalStorage {
    @observable _sceneList: Scene[] = [];
    constructor() {
        this.fetchSceneList();
    }
    get sceneList(): Scene[]{
        return this._sceneList.slice()
    }

    set sceneList(sceneList: Scene[]) {
        this._sceneList = sceneList;
    }
    @action
    async fetchSceneList() {
        let data: string = await AsyncStorage.getItem('sceneList');
        let sceneListJson: any = JSON.parse(data);
        let sceneList = [];
        for(let sceneJson of sceneListJson) {
            let taskArray = [];
            for (let taskJson of sceneJson.tasks) {
                let task = new Task(taskJson.id, taskJson.title, taskJson.description, taskJson.alertTime);
                taskArray.push(task);
            }
            let scene: Scene = new Scene(sceneJson.id, sceneJson.title, sceneJson.description, taskArray);
            sceneList.push(scene);
        }
        this.sceneList = sceneList;
    }
}

export const localStorage = new LocalStorage();