export class Iterator<T> {
    constructor(
        private _items: Array<T> = null,
        private _index: number = 0
    ) { }

    public hasNext(): boolean {
        return this._index < this._items.length;
    }

    public next(): T {
        if (this.hasNext()) {
            var nextItem: T = this._items[this._index];
            this._index += 1;
            return nextItem;
        }
    }
}
