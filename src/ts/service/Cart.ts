import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    sum(): number{
        return this._items.reduce((acc, item) => acc + item.price, 0);
    }

    sumWithDiscount(discount: number): number {
        return this.sum() * (1 - discount);
    }

    delete(id: number): void {
        this._items = this._items.filter(item => item.id !== id);
    }
}