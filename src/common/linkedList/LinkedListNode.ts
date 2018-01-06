import * as uuid from 'uuid';

export default class LinkedListNode {
    private _id: string;
    _content: any;
    private _next: LinkedListNode | null;

    constructor(content: any) {
        this._id = uuid();
        this._content = content;
        this._next = null;
        // this._prevNode = prevNode || null;   // if prevNode is null, this node is head
    }

    public get id() {
        return this._id;
    }
    
    public get next() {
        return this._next;
    }

    public set next(node: LinkedListNode | null) {
        this._next = node;
    }
    public get content() {
        return this._content;
    }
}