import { Rectangle } from "./rectangle";

export class Square extends Rectangle {
    constructor(side) {
        super(side, side)
    }
}

export const square = new Square(4)