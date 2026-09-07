export class Triangle {
    constructor(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }

    isValid() {
        const eps = 1e-10;

        const sides = [this.sideA, this.sideB, this.sideC].sort((a, b) => a - b);
        const [a, b ,c] = sides;

        return (a + b) > (c - eps);
        }

    area() {
        if (!this.isValid()) return 0;
        const s = (this.sideA + this.sideB + this.sideC) / 2;
        const radicand = s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC);
        return radicand <= 0 ? 0 : Math.sqrt(radicand);
    }

    perimeter() {

        if (!this.isValid()) return NaN;
        return this.sideA + this.sideB + this.sideC;
    }
}

export const triangle = new Triangle(3, 4, 5);