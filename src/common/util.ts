import {Dimensions, AsyncStorage} from 'react-native';
import {BLOCK_NUM_IN_ONE_LINE} from './const';

export class Scene {
    id: string;
    title: string;
    description: string;
    tasks: Array<Task>;

    constructor(id: string, title: string, desciption: string, tasks: Array<Task>) {
        this.id = id;
        this.title = title;
        this.description = desciption;
        this.tasks = tasks;
    }
}

export class Task {
    id: string;
    title: string;
    description: string;
    alertTime: number;

    constructor(id: string, title: string, desciption: string, alertTime: number) {
        this.id = id;
        this.title = title;
        this.description = desciption;
        this.alertTime = alertTime;
    }
}

export async function getStorageScenes(): Promise<any> {
    let data: string = await AsyncStorage.getItem('sceneList');
    return JSON.parse(data);
}

export async function setStorageScenes(sceneList: string){
    await AsyncStorage.setItem('sceneList', sceneList);
}