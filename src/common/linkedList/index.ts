import Node from './LinkedListNode';

export class LinkedList {
    private length: WeakMap<object, number> = new WeakMap();
    private head: WeakMap<object, Node | null>  = new WeakMap();
    constructor () {
        this.length.set(this, 0);
        this.head.set(this, null);
    }
    public append(content: any) {
        let node = new Node(content);
        if (!this.getHead()) {
            this.head.set(this, node);
        } else {
            let current: Node = <Node>this.getHead();
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        let l: number = this.size();
        l++;
        this.length.set(this, l);
    }
    public insert(position: number, content: any) {
        if (this.size() === 0) {
            let node = new Node(content);
            this.head.set(this, node);
            this.length.set(this, 1);
        } else {
            if (position >= 0 && position < this.size()) {
                let node = new Node(content),
                    current = <Node>this.getHead(),
                    index = 0;
                if (position === 0) {
                    node.next = <Node>current;
                    this.head.set(this, node);
                } else {
                    let previous: any;
                    while (index++ < position) {
                        previous = current;
                        current = <Node>current.next;
                    }
                    node.next = current;
                    previous.next = node;
                }
                let l = this.size();
                l++;
                this.length.set(this, l);
                return true;
            } else if(position === this.size()){
                this.append(content);
            } else {
                return false;
            }
        }
    }
    public removeAt(position: number): any {
        if (position > -1 && position < this.size()) {
            let current = <Node>this.getHead(),
                index = 0;
            if (position === 0) {
                this.head.set(this, current.next);
            } else {
                let previous: any;
                while (index++ < position) {
                    previous = current;
                    current = <Node>current.next;
                }
                if (position === this.size() -1) {
                    previous.next = null;
                } else {
                    previous.next = current.next;
                }
            }
            let l = this.size();
            l--;
            this.length.set(this, l);
            return current.content;
        } else {
            return null;
        }
    }
    public remove(content: any) {
        let index = this.indexOf(content);
        return this.removeAt(index);
    }
    public indexOf(content: any): number {
        let current = this.getHead(),
            index = 0;
        while (current) {
            if (content === current.content) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }
    public isEmpty(): boolean {
        return this.size() === 0;
    }
    public size(): number  {
        return <number>this.length.get(this);
    }
    public getHead(): Node | null {
        return <Node | null>this.head.get(this);
    }
    public toString(): string {
        let current = this.getHead(),
            string = '';
        while (current) {
            string += current.content + (current.next ? ', ' : '');
            current = current.next;
        }
        return string;
    }
}
