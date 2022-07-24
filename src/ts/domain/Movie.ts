import Buyable from './Buyable';

export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly year: Date,
        readonly country: string,
        readonly slogan: string,
        readonly genre: string,
        readonly duration: number,
        readonly price: number,
    ) { }
}