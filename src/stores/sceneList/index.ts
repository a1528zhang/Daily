import { observable, computed, action } from "mobx";
import SceneStore from '../scene';

export class SceneListStore {
    @observable tasks: Array<SceneStore> = [];
    @observable editable: boolean = false;  // sence block is editable
    @observable selected: boolean = false;  // one of sence block has been selected

    @computed
    get unfinishedTaskCount(): number {
        return this.tasks.filter((task: SceneStore) => !task.finished).length;
    }

    @action
    public addTask(title: string, content: string) {
        this.tasks.push(new SceneStore(title, content));
    }

    @action
    public toggleEditable(editable: boolean) {
        this.editable = editable;
    }

    @action
    public toggleSelected(selected: boolean) {
        this.selected = selected;
    }
}

export default new SceneListStore();
