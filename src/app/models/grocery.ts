export default class Grocery {
    name: string;
    quantity: number;
    pricePerUnit: number;

    constructor(name: string, quantity: number, price: number) {
        this.name = name;
        this.quantity = quantity;
        this.pricePerUnit = price;
    }

    public getTotalPrice(): number {
        return this.quantity * this.pricePerUnit;
    }

    public toString(): string {
        return JSON.stringify(this.toJSON());
    }

    public toJSON(): object {
        return {
            name: this.name,
            quantity: this.quantity,
            pricePerUnit: this.pricePerUnit,
            totalPrice: this.getTotalPrice()
        }
    }
}