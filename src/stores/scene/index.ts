import { observable } from "mobx";

export default class SceneStore {
    id = Math.random();
    @observable _title: string;
    @observable _content: string;
    @observable _finished: boolean = false;
    
    constructor(title: string, content: string) {
        this._title = title;
        this._content = content;
    }

    get title() {
        return this._title;
    }
    set title(title: string) {
        this._title = title;
    }
    get finished() {
        return this._finished;
    }
    startTask() {
        this._finished = false;
    }
    finishTask() {
        this._finished = true;
    }
}
