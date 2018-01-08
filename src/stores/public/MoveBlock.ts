import { observable, action } from "mobx";
import { MOVE_BLOCK_WIDTH } from '../../common/const';
import { computed } from "mobx/lib/api/computed";

type MoveBlockStyle = {
    [propName: string]: any;
}
export class MoveBlockStore {
    @observable _progress: number;
    @observable _title: string;
    @observable _style: MoveBlockStyle = {
        height: MOVE_BLOCK_WIDTH,
        width: MOVE_BLOCK_WIDTH,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        top: 0,
        left: 0,
        zIndex: 10,
    };
    @observable _display: boolean = false;
    @observable _top: number;
    @observable _left: number;

    get progress() {
        return this._progress;
    }
    get title() {
        return this._title;
    }
    get style() {
        return this._style;
    }
    get display() {
        return this._display;
    }
    @action
    setProgress(p: number) {
        this._progress = p;
    }
    @action
    setTitle(t: string) {
        this._title = t;
    }
    @action
    setStyle(s: object) {
        this._style = {
            ...this._style,
            ...s,
        };
    }
    @action 
    toggleDisplay(b: boolean) {
        this._display = b;
    }
}

export default new MoveBlockStore();